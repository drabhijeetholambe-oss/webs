"use client";

import { useState } from "react";
// import { Calendar, Clock } from "lucide-react";
import { bookAppointment } from "../server/actions";
import {toast} from "sonner"
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon, Clock, Loader2 } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Command, CommandItem, CommandGroup } from "@/components/ui/command";
const BookAppointment = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isTimePopoverOpen, setIsTimePopoverOpen] = useState(false);
  const [submitting,setIsSubmitting] = useState(false);
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState("");
  const [sessionType,setSessionType] = useState("");
  const [additionalNotes,setAdditionalNotes] = useState("")
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
  const sessionTypes = [
    {value:"anxiety-stress-therapy",label:"Anxiety & Stress Therapy"},
    {value:"relationship-counselling",label:"Relationship Counselling"},
    {value:"mindfulness-therapy",label:"Mindfulness Therapy"},
    {value:"trauma-ptsd-therapy",label:"Trauma & PTSD Therapy"},
    {value:"depression-counselling",label:"Depression Counselling"}
  ]
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };



function isValidEmail(email: string): boolean {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}
function isValidSessionType(sessionType:string)
{
  return sessionTypes.some(st=>st.value == sessionType);
}
function isValidPhone(phone: string): boolean {
  const regex = /^(?:\+91|91)?[6-9]\d{9}$/;
  return regex.test("+91"+phone);
}
  const handleDateSelect = (selectedDate: Date) => {
    setDate(selectedDate);
    setIsCalendarOpen(false);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setIsTimePopoverOpen(false);
  };
  const handleSubmit = async()=>{
    const formData = new FormData()
    if(!submitting)
    {
       if (!date || !selectedTime ||selectedTime.length == 0) { setIsSubmitting(false); return; }
    formData.set("date", formatDate(date));
    formData.set("time", selectedTime);
    if(name.length==0)
    {
      toast.warning("Name is required");
      return;
    }
    else{
      formData.set("name",name);
    }
    if(email.length == 0 || !isValidEmail(email))
    {
      toast.warning("Valid email is required");
      return;
    }
    else{
      formData.set("email",email);
    }
    if(phone.length == 0 || !isValidPhone(phone))
    {
      toast.warning("Valid phone number is required");
      return;
    }
    else{
      formData.set("phone",phone);
    }
    if(sessionType.length == 0 || !isValidSessionType(sessionType))
    {
      toast.warning("Session type is required");
      return;
    }
    else{
      formData.set("session-type",sessionType);
    }
    formData.set("additional-notes",additionalNotes)
try{
  setIsSubmitting(true);
  await bookAppointment(formData)
  toast.success("Your request has been recorded , will contact you shortly");
    }
    catch(error)
    {
      toast.error("Something went wrong");
    }
    finally{
      setIsSubmitting(false);
    }
    }
    
  }
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
            <Input 
              id="name" 
              onChange={(e)=>setName(e.target.value)}
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
            <Input 
              type="email" 
              id="email" 
              
              onChange={(e)=>setEmail(e.target.value)}
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
            <Input 
              type="tel" 
              id="phone" 
              onChange={(e)=>setPhone(e.target.value)}
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
            <Select
              onValueChange={(v)=>setSessionType(v)}
              required
             
            >
              <SelectTrigger  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300 hover:border-gray-400 focus:scale-[1.02] cursor-pointer">
                <SelectValue placeholder = "Select Sessiom Type"/>
              </SelectTrigger>
              <SelectContent>
                {sessionTypes.map(st=><SelectItem key={st.value} value={st.value}>{st.label}</SelectItem>)}
              </SelectContent>
          
            </Select>
          </div>

          {/* Date & Time */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Date Picker */}
      <div className="flex flex-col">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Preferred Date
        </label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-full justify-start text-left font-normal rounded-xl",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      {/* Time Picker */}
      <div className="flex flex-col">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Preferred Time
        </label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-full justify-start text-left font-normal rounded-xl",
                !selectedTime && "text-muted-foreground"
              )}
            >
              <Clock className="mr-2 h-4 w-4" />
              {selectedTime || <span>Select time</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-0 w-full" align="start">
            <Command>
              <CommandGroup className="max-h-48 overflow-y-auto">
                {timeSlots.map((time) => (
                  <CommandItem
                    key={time}
                    onSelect={() => setSelectedTime(time)}
                    className={cn(
                      "cursor-pointer",
                      selectedTime === time && "bg-muted"
                    )}
                  >
                    {time}
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    </div>

          {/* Notes */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Additional Notes (Optional)
            </label>
            <textarea
              id="message"
              onChange={(e)=>setAdditionalNotes(e.target.value)}
              placeholder="Anything you'd like us to know before your session?"
              rows={4}
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:border-gray-300 focus:scale-[1.02] resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button 
              type="submit"
              disabled={submitting}
              onClick={handleSubmit}
              className={`px-8 py-4 text-lg ${submitting?"bg-gray-700":"bg-black"} ${!submitting && "hover:bg-blue-600"} text-white rounded-2xl font-semibold transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95`}
            >
              {submitting ? <span className="flex items-center gap-2">Submitting <Loader2 className="animate-spin"/></span>:"Confirm Appointment"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookAppointment;