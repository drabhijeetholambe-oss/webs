"use client";

import { useState } from "react";
import { Calendar, Clock } from "lucide-react";

const BookAppointment = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isTimePopoverOpen, setIsTimePopoverOpen] = useState(false);

  // Available time slots
  const timeSlots = [
    "09:00 AM",
    "10:00 AM", 
    "11:00 AM",
    "12:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
    "06:00 PM"
  ];

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const isDateDisabled = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const generateCalendarDays = () => {
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());
    
    const days = [];
    const current = new Date(startDate);
    
    for (let i = 0; i < 42; i++) {
      days.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }
    
    return days;
  };

  const handleDateSelect = (selectedDate: Date) => {
    setDate(selectedDate);
    setIsCalendarOpen(false);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setIsTimePopoverOpen(false);
  };

  return (
    <section id="appointment" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-serif text-black mb-6">
          Book an Appointment
        </h2>
        <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
          Schedule your session with ease. Fill out the form below and we'll confirm your appointment shortly.
        </p>

        <div className="grid grid-cols-1 gap-6 text-left max-w-2xl mx-auto">
          {/* Full Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input 
              id="name" 
              placeholder="Your Name" 
              required 
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300 hover:border-gray-400 focus:scale-[1.02]"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input 
              type="email" 
              id="email" 
              placeholder="you@example.com" 
              required 
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300 hover:border-gray-400 focus:scale-[1.02]"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input 
              type="tel" 
              id="phone" 
              placeholder="+91 98765 43210" 
              required 
              className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300 focus:scale-[1.02]"
            />
          </div>

          {/* Session Type */}
          <div>
            <label htmlFor="sessionType" className="block text-sm font-medium text-gray-700 mb-2">
              Session Type
            </label>
            <select
              id="sessionType"
              required
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300 hover:border-gray-400 focus:scale-[1.02] cursor-pointer"
            >
              <option value="">Select a session type</option>
              <option value="individual">Individual Therapy</option>
              <option value="couples">Couples Therapy</option>
              <option value="family">Family Therapy</option>
              <option value="online">Online Consultation</option>
            </select>
          </div>

          {/* Date & Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Date Picker */}
            <div className="flex flex-col">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Date
              </label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-left text-black focus:outline-none focus:ring-2 focus:ring-black flex items-center transition-all duration-300 hover:border-gray-400 hover:shadow-md focus:scale-[1.02] cursor-pointer"
                >
                  <Calendar className="mr-2 h-4 w-4 text-gray-600" />
                  {date ? formatDate(date) : <span className="text-gray-500">Pick a date</span>}
                </button>
                
                {isCalendarOpen && (
                  <div className="absolute top-full left-0 mt-2 bg-white border border-gray-300 rounded-2xl shadow-xl z-50 p-6 animate-in fade-in-0 zoom-in-95 duration-200">
                    <div className="grid grid-cols-7 gap-1 text-center text-sm">
                      {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                        <div key={day} className="p-2 font-semibold text-gray-700">{day}</div>
                      ))}
                      {generateCalendarDays().map((day, index) => {
                        const isDisabled = isDateDisabled(day);
                        const isSelected = date && day.toDateString() === date.toDateString();
                        const isCurrentMonth = day.getMonth() === new Date().getMonth();
                        
                        return (
                          <button
                            key={index}
                            type="button"
                            onClick={() => !isDisabled && handleDateSelect(day)}
                            disabled={isDisabled}
                            className={`p-2 text-sm rounded-xl transition-all duration-200 transform hover:scale-110 ${
                              isSelected 
                                ? 'bg-black text-white shadow-lg scale-110' 
                                : isDisabled 
                                  ? 'text-gray-300 cursor-not-allowed' 
                                  : isCurrentMonth 
                                    ? 'text-black hover:bg-gray-100 hover:shadow-md' 
                                    : 'text-gray-400 hover:bg-gray-50'
                            }`}
                          >
                            {day.getDate()}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Time Slots Popover */}
            <div className="flex flex-col">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Time
              </label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsTimePopoverOpen(!isTimePopoverOpen)}
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-left text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center transition-all duration-300 hover:border-gray-300 hover:shadow-md focus:scale-[1.02] cursor-pointer"
                >
                  <Clock className="mr-2 h-4 w-4 text-gray-600" />
                  {selectedTime ? selectedTime : <span className="text-gray-500">Select time</span>}
                </button>
                
                {isTimePopoverOpen && (
                  <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-2xl shadow-xl z-50 p-4 w-full animate-in fade-in-0 zoom-in-95 duration-200 overflow-hidden">
                    <div className="grid grid-cols-2 gap-3 max-h-48 overflow-y-scroll overflow-x-hidden">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => handleTimeSelect(time)}
                          className={`p-3 text-sm rounded-xl border transition-all duration-200 text-center transform hover:scale-105 hover:shadow-md ${
                            selectedTime === time
                              ? 'bg-black text-white border-gray-500 shadow-lg scale-105'
                              : 'bg-white text-gray-700 border-gray-200 hover:bg-blue-50 hover:border-gray-300'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Notes */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Additional Notes (Optional)
            </label>
            <textarea
              id="message"
              placeholder="Anything you'd like us to know before your session?"
              rows={4}
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:border-gray-300 focus:scale-[1.02] resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button 
              type="submit"
              className="px-8 py-4 text-lg bg-black hover:bg-blue-600 text-white rounded-2xl font-semibold transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
            >
              Confirm Appointment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookAppointment;