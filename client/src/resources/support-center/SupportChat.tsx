import * as React from "react";
import { MessageCircle, Bot, Headset, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type Mode = "bot" | "agent";

function openBotIfIntegrated() {
  // If you’ve embedded a bot SDK (e.g., window.Intercom, Crisp, custom widget)
  // call it here. This is a safe no-op fallback.
  // Example custom hook:
  // if ((window as any).ANOIAK_BOT?.open) return (window as any).ANOIAK_BOT.open();
  // Crisp:
  // (window as any).$crisp?.push(["do", "chat:open"]);
  // Intercom:
  // (window as any).Intercom?.("show");
}

export function SupportChatButtons() {
  const [open, setOpen] = React.useState(false);
  const [mode, setMode] = React.useState<Mode>("bot");

  // Agent form state
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [topic, setTopic] = React.useState("");
  const [details, setDetails] = React.useState("");

  const launchBot = () => {
    openBotIfIntegrated();
    setOpen(false);
  };

  const startAgentChat = () => {
    // Minimal viable: fire an email with prefilled content.
    const subject = encodeURIComponent("Live chat request (Support Agent)");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nTopic: ${topic}\n\nDetails:\n${details}\n\nRequested via Support Center (expecting 10–15 min response)`
    );
    window.location.href = `mailto:support@anoiak.com?subject=${subject}&body=${body}`;
    setOpen(false);
  };

  const AgentForm = (
    <div className="space-y-3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
          <label className="text-sm text-slate-600">Name</label>
          <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
        </div>
        <div>
          <label className="text-sm text-slate-600">Email</label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
          />
        </div>
      </div>
      <div>
        <label className="text-sm text-slate-600">Topic</label>
        <Input value={topic} onChange={(e) => setTopic(e.target.value)} placeholder="e.g., Billing, Deployment, API" />
      </div>
      <div>
        <label className="text-sm text-slate-600">Describe the issue</label>
        <Textarea
          rows={4}
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          placeholder="Include repro steps, logs, or URLs…"
        />
      </div>
      <div className="flex items-center gap-2 text-xs text-slate-600">
        <Clock className="h-4 w-4" />
        Typical response: <span className="font-medium text-slate-800">10–15 minutes</span> during support hours
      </div>
    </div>
  );

  return (
    <div className="flex flex-wrap gap-3">
      {/* Button 1: Chat with AI Bot */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            variant="default"
            onClick={() => {
              setMode("bot");
              setOpen(true);
            }}
          >
            <Bot className="h-4 w-4 mr-2" />
            Chat with AI Bot
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Bot className="h-5 w-5" />
              Chat with AI Bot
            </DialogTitle>
            <DialogDescription>
              Get instant answers from our knowledge base and guides.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-3">
            <p className="text-sm text-slate-600">
              Click “Open Bot” to launch the embedded chat widget. If nothing opens, integrate your bot in
              <code className="px-1 py-0.5 rounded bg-slate-100 text-slate-700">openBotIfIntegrated()</code>
              (Crisp/Intercom/custom).
            </p>
          </div>

          <DialogFooter className="mt-2">
            <DialogClose asChild>
              <Button variant="ghost">Close</Button>
            </DialogClose>
            <Button onClick={launchBot}>
              <MessageCircle className="h-4 w-4 mr-2" />
              Open Bot
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Button 2: Chat with Support Agent (10–15 min) */}
      <Dialog open={open && mode === "agent"} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            variant="secondary"
            onClick={() => {
              setMode("agent");
              setOpen(true);
            }}
          >
            <Headset className="h-4 w-4 mr-2" />
            Chat with Support Agent
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Headset className="h-5 w-5" />
              Chat with Support Agent
            </DialogTitle>
            <DialogDescription>
              Typical response within <span className="font-medium text-slate-800">10–15 minutes</span>.
            </DialogDescription>
          </DialogHeader>

          {AgentForm}

          <DialogFooter className="mt-2">
            <DialogClose asChild>
              <Button variant="ghost">Cancel</Button>
            </DialogClose>
            <Button onClick={startAgentChat}>
              <MessageCircle className="h-4 w-4 mr-2" />
              Start Chat
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export function FloatingSupportChat() {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-blue-600 text-white shadow-lg px-4 py-3 hover:bg-blue-700 focus:outline-none"
          aria-label="Open support chat"
        >
          <MessageCircle className="h-4 w-4" />
          Support
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Need help?</DialogTitle>
          <DialogDescription>Choose how you’d like to chat with us.</DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="rounded-lg border p-4">
            <div className="flex items-center gap-2 font-medium">
              <Bot className="h-4 w-4" /> AI Bot
            </div>
            <p className="text-sm text-slate-600 mt-1">Instant answers, 24/7.</p>
            <Button className="mt-3 w-full" onClick={openBotIfIntegrated}>
              Open Bot
            </Button>
          </div>

          <div className="rounded-lg border p-4">
            <div className="flex items-center gap-2 font-medium">
              <Headset className="h-4 w-4" /> Support Agent
            </div>
            <p className="text-sm text-slate-600 mt-1">
              Typical response: <span className="font-medium text-slate-800">10–15 minutes</span>
            </p>
            <a
              href={`mailto:support@anoiak.com?subject=${encodeURIComponent(
                "Live chat request (Support Agent)"
              )}&body=${encodeURIComponent(
                "Please share your issue details here. We aim to reply within 10–15 minutes during support hours."
              )}`}
            >
              <Button variant="secondary" className="mt-3 w-full">Start Chat</Button>
            </a>
          </div>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
