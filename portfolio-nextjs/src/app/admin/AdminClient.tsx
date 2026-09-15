"use client";
import { useEffect, useState } from "react";
import { defaultData } from "@/lib/data";

const USER = "adminjoe";
const PASS = "joeportfolio12";

export default function AdminClient() {
  const [authed, setAuthed] = useState(false);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [err, setErr] = useState(false);
  const [section, setSection] = useState("profile");
  const [profile, setProfile] = useState(defaultData.profile);
  const [social, setSocial] = useState(defaultData.social);
  const [about, setAbout] = useState(defaultData.about);
  const [toast, setToast] = useState("");

  useEffect(() => {
    if (localStorage.getItem("portfolio_admin_auth") === "true") setAuthed(true);
    try {
      const p = localStorage.getItem("portfolio_profile"); if (p) setProfile(JSON.parse(p));
      const s = localStorage.getItem("portfolio_social"); if (s) setSocial(JSON.parse(s));
      const a = localStorage.getItem("portfolio_about"); if (a) setAbout(JSON.parse(a));
    } catch {}
  }, []);

  const showToast = (m: string) => { setToast(m); setTimeout(() => setToast(""), 3000); };

  const login = (e: React.FormEvent) => {
    e.preventDefault();
    if (user === USER && pass === PASS) { localStorage.setItem("portfolio_admin_auth", "true"); setAuthed(true); setErr(false); }
    else setErr(true);
  };
  const logout = () => { localStorage.removeItem("portfolio_admin_auth"); setAuthed(false); };

  const saveProfile = () => { localStorage.setItem("portfolio_profile", JSON.stringify(profile)); showToast("Profile saved!"); };
  const saveSocial = () => { localStorage.setItem("portfolio_social", JSON.stringify(social)); showToast("Social links saved!"); };
  const saveAbout = () => { localStorage.setItem("portfolio_about", JSON.stringify(about)); showToast("About saved!"); };

  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#1A1A1A] p-6">
        <form onSubmit={login} className="bg-[#252525] p-8 rounded-2xl w-full max-w-sm flex flex-col gap-4">
          <h2 className="text-2xl font-bold bg-[linear-gradient(135deg,#FF6B00,#FF1493)] bg-clip-text text-transparent text-center">Admin Login</h2>
          <input value={user} onChange={(e) => setUser(e.target.value)} placeholder="Username" className="px-4 py-3 rounded-xl bg-[#1A1A1A] border border-[#2A2A2A] text-white" required />
          <input value={pass} onChange={(e) => setPass(e.target.value)} placeholder="Password" type="password" className="px-4 py-3 rounded-xl bg-[#1A1A1A] border border-[#2A2A2A] text-white" required />
          <button type="submit" className="py-3 bg-[#E91E63] hover:bg-[linear-gradient(135deg,#FF6B00,#FF1493)] text-white rounded-xl font-medium">Login</button>
          {err && <p className="text-red-400 text-sm text-center">Invalid username or password</p>}
        </form>
      </div>
    );
  }

  const tabs = ["profile", "social", "about"] as const;

  return (
    <div className="min-h-screen bg-[#1A1A1A] p-6 pt-[100px]">
      <div className="max-w-[900px] mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold bg-[linear-gradient(135deg,#FF6B00,#FF1493)] bg-clip-text text-transparent">Portfolio Admin</h1>
          <button onClick={logout} className="px-4 py-2 bg-red-500 text-white rounded-xl">Logout</button>
        </div>
        <div className="flex gap-2 mb-6 flex-wrap">
          {tabs.map((t) => (
            <button key={t} onClick={() => setSection(t)} className={`px-4 py-2 rounded-full font-medium capitalize ${section === t ? "bg-[linear-gradient(135deg,#FF6B00,#FF1493)] text-white" : "bg-[#2A2A2A] text-[#B0B0B0]"}`}>{t}</button>
          ))}
        </div>

        {section === "profile" && (
          <div className="bg-[#252525] p-6 rounded-2xl flex flex-col gap-4">
            <h3 className="font-semibold">Profile</h3>
            <input value={profile.name} onChange={(e) => setProfile({ ...profile, name: e.target.value })} placeholder="Name" className="px-4 py-3 rounded-xl bg-[#1A1A1A] border border-[#2A2A2A] text-white" />
            <input value={profile.title} onChange={(e) => setProfile({ ...profile, title: e.target.value })} placeholder="Title" className="px-4 py-3 rounded-xl bg-[#1A1A1A] border border-[#2A2A2A] text-white" />
            <textarea value={profile.bio} onChange={(e) => setProfile({ ...profile, bio: e.target.value })} rows={3} className="px-4 py-3 rounded-xl bg-[#1A1A1A] border border-[#2A2A2A] text-white" />
            <button onClick={saveProfile} className="self-start px-6 py-3 bg-[#E91E63] text-white rounded-xl">Save Profile</button>
          </div>
        )}
        {section === "social" && (
          <div className="bg-[#252525] p-6 rounded-2xl flex flex-col gap-4">
            <h3 className="font-semibold">Social Links</h3>
            <input value={social.instagram} onChange={(e) => setSocial({ ...social, instagram: e.target.value })} placeholder="Instagram" className="px-4 py-3 rounded-xl bg-[#1A1A1A] border border-[#2A2A2A] text-white" />
            <input value={social.linkedin} onChange={(e) => setSocial({ ...social, linkedin: e.target.value })} placeholder="LinkedIn" className="px-4 py-3 rounded-xl bg-[#1A1A1A] border border-[#2A2A2A] text-white" />
            <input value={social.behance} onChange={(e) => setSocial({ ...social, behance: e.target.value })} placeholder="Behance" className="px-4 py-3 rounded-xl bg-[#1A1A1A] border border-[#2A2A2A] text-white" />
            <input value={social.email} onChange={(e) => setSocial({ ...social, email: e.target.value })} placeholder="Email" className="px-4 py-3 rounded-xl bg-[#1A1A1A] border border-[#2A2A2A] text-white" />
            <button onClick={saveSocial} className="self-start px-6 py-3 bg-[#E91E63] text-white rounded-xl">Save Social</button>
          </div>
        )}
        {section === "about" && (
          <div className="bg-[#252525] p-6 rounded-2xl flex flex-col gap-4">
            <h3 className="font-semibold">About</h3>
            <input value={about.quote} onChange={(e) => setAbout({ ...about, quote: e.target.value })} placeholder="Quote" className="px-4 py-3 rounded-xl bg-[#1A1A1A] border border-[#2A2A2A] text-white" />
            <textarea value={about.bio} onChange={(e) => setAbout({ ...about, bio: e.target.value })} rows={6} className="px-4 py-3 rounded-xl bg-[#1A1A1A] border border-[#2A2A2A] text-white" />
            <input value={about.location} onChange={(e) => setAbout({ ...about, location: e.target.value })} placeholder="Location" className="px-4 py-3 rounded-xl bg-[#1A1A1A] border border-[#2A2A2A] text-white" />
            <label className="flex items-center gap-2"><input type="checkbox" checked={about.bioVisible} onChange={(e) => setAbout({ ...about, bioVisible: e.target.checked })} /> Show bio</label>
            <button onClick={saveAbout} className="self-start px-6 py-3 bg-[#E91E63] text-white rounded-xl">Save About</button>
          </div>
        )}
        {toast && <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-[#2A2A2A] text-white px-6 py-3 rounded-full shadow-lg">{toast}</div>}
        <p className="text-[#B0B0B0] text-sm mt-6">Edits are saved to <code>localStorage</code> (keys: portfolio_profile, portfolio_social, portfolio_about, etc.) and will be picked up by the homepage on next load. This mirrors the original admin.html behavior.</p>
      </div>
    </div>
  );
}
