import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import Image from "next/image";
import profilePic from "../assets/kartik-profile.jpg";
import logo from "../assets/kartik-talks-logo.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-12 font-sans">
      <header className="text-center mb-16">
        <div className="flex justify-center mb-4">
          <Image src={logo} alt="Kartik Talks Logo" width={160} height={160} className="mb-6" />
        </div>
        <div className="flex justify-center mb-6">
          <Image src={profilePic} alt="Kartik Profile Picture" width={120} height={120} className="rounded-full border-4 border-white shadow-lg" />
        </div>
        <h1 className="text-5xl font-extrabold tracking-tight">Kartik Talks [IIT DELHI]</h1>
        <p className="text-xl text-gray-300 mt-2">AIR 2201 • IIT Delhi • 10.6k+ Subscribers</p>
        <div className="flex justify-center gap-6 mt-8">
          <Button className="text-lg px-6 py-3">Book Booster Call</Button>
          <Button variant="outline" className="text-lg px-6 py-3">Join 1-Month Mentorship</Button>
        </div>
      </header>
      <section className="max-w-3xl mx-auto text-center mb-20">
        <h2 className="text-3xl font-semibold mb-4">I'm not your teacher. I'm your big brother, your JEE guide — and your street-smart mentor too.</h2>
        <p className="text-gray-400 text-lg">
          I cracked JEE Advanced with AIR 2201, but that’s just the surface. I'm here to help you with more than prep —
          from fixing burnout and study routines to helping you talk to people, build confidence, and make life decisions.
          Whether you’re awkward around girls or unsure what to do next — we figure it all out together.
        </p>
      </section>
      <section className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Book Your JEE + Life Mentorship Call – With Kartik Talks</h2>
        <p className="text-base text-gray-300 mb-6">
          I'm Kartik – an IIT Delhi student (AIR 2201, JEE Advanced) and the face behind Kartik Talks (10K+ on YouTube).
          This isn’t just about marks — it’s about mindset, motivation, and figuring out how to actually win at JEE and life.
          Whether you’re confused about prep, lacking confidence, overthinking life decisions, or feeling like you don’t know how to talk to people —
          I’ve got your back.
          <br /><br />
          No lectures. No gyaan. Just raw, relatable guidance.
          <br />
          Book a ⚡ 30-min Booster Call (₹399) or 🔥 1-Month Mentorship (₹1299) and let’s start fixing your game.
        </p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfXHgNE8x8pJ2zPqlDdUp6zIePFXnaHgxIlALC7xyBD-9shhg/viewform" target="_blank">
          <Button variant="secondary" className="text-lg px-6 py-3">Open Booking Form</Button>
        </a>
      </section>
    </div>
  );
}
