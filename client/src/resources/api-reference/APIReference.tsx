import React, { useEffect } from "react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  Code,
  BookOpen,
  Link2,
  Lock,
  Globe2,
  Server,
  Network,
  TerminalSquare,
  ChevronRight,
  LifeBuoy,
} from "lucide-react";

/* -----------------------------------------------------------
   API Reference (light theme)
   - No new deps
   - Sticky sidebar
   - Endpoint groups
   - Copy-ready examples
----------------------------------------------------------- */

export default function APIReference() {
  // Force LIGHT theme here (docs area)
  useEffect(() => {
    document.documentElement.classList.remove("dark");
  }, []);

  const baseUrl = "https://api.anoiak.com/v1";

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      <SEO
        title="API Reference — Anoiak"
        description="HTTP endpoints, request/response schemas, and examples for the Anoiak API."
        canonicalUrl="https://anoiak.com/resources/api-reference"
        ogImage="/og/og-default.jpg"
      />

      <Navigation />

      {/* Hero */}
      <header className="max-w-6xl mx-auto px-6 pt-24 pb-10">
        <div className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-sm text-slate-600 shadow-sm">
          <Code className="h-4 w-4" />
          API Reference
        </div>

        <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight">
          Anoiak API
        </h1>
        <p className="mt-3 text-slate-600 max-w-2xl">
          REST API for building on Anoiak. Authenticate with Bearer tokens, then
          call endpoints to integrate AI-powered features into your apps.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#authentication">
            <Button><Lock className="h-4 w-4 mr-2" />Authentication</Button>
          </a>
          <a href="#endpoints">
            <Button variant="secondary"><Server className="h-4 w-4 mr-2" />Endpoints</Button>
          </a>
          <Link href="/resources/support-center">
            <Button variant="outline"><LifeBuoy className="h-4 w-4 mr-2" />Get Help</Button>
          </Link>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-6xl mx-auto px-6 pb-24 grid lg:grid-cols-[240px,1fr] gap-8">
        {/* Sticky Sidebar */}
        <aside className="hidden lg:block">
          <nav className="sticky top-24">
            <NavGroup title="Basics" items={[
              { label: "Base URL", href: "#base-url" },
              { label: "Versioning", href: "#versioning" },
              { label: "Authentication", href: "#authentication" },
              { label: "Errors", href: "#errors" },
              { label: "Rate Limits", href: "#rate-limits" },
            ]} />
            <NavGroup title="Endpoints" items={[
              { label: "Echo", href: "#ep-echo" },
              { label: "Messages", href: "#ep-messages" },
              { label: "Files", href: "#ep-files" },
            ]} />
          </nav>
        </aside>

        {/* Content */}
        <section className="space-y-12">
          {/* Base URL */}
          <Block id="base-url" title="Base URL" icon={Globe2}
            subtitle="All requests are sent to this root.">
            <InfoPanel
              rows={[
                ["Base", baseUrl],
                ["Protocol", "HTTPS only"],
                ["Content-Type", "application/json unless uploading files"],
              ]}
            />
          </Block>

          {/* Versioning */}
          <Block id="versioning" title="Versioning" icon={Network}
            subtitle="Pinned in the URL. Breaking changes roll into a new /vX.">
            <CodeBlock code={`GET ${baseUrl}/health`} />
          </Block>

          {/* Authentication */}
          <Block id="authentication" title="Authentication" icon={Lock}
            subtitle="Use Bearer tokens in the Authorization header.">
            <p className="text-slate-700">
              Create and manage API keys from your Anoiak dashboard. Keep them secret and
              never embed keys in client-side code.
            </p>

            <div className="mt-4 rounded-xl border border-slate-200 bg-white">
              <Accordion type="single" collapsible>
                <AccordionItem value="curl">
                  <AccordionTrigger className="px-4 py-3">
                    cURL Example
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <CodeBlock code={`curl -X POST "${baseUrl}/echo" \\
  -H "Authorization: Bearer <YOUR_API_KEY>" \\
  -H "Content-Type: application/json" \\
  -d '{ "message": "hello anoiak" }'`} />
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="js">
                  <AccordionTrigger className="px-4 py-3">
                    JavaScript (fetch)
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <CodeBlock code={`await fetch("${baseUrl}/echo", {
  method: "POST",
  headers: {
    "Authorization": "Bearer <YOUR_API_KEY>",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ message: "hello anoiak" })
}).then(r => r.json());`} />
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="py">
                  <AccordionTrigger className="px-4 py-3">
                    Python (requests)
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <CodeBlock code={`import requests

resp = requests.post(
  "${baseUrl}/echo",
  headers={
    "Authorization": "Bearer <YOUR_API_KEY>",
    "Content-Type": "application/json",
  },
  json={"message": "hello anoiak"}
)
print(resp.status_code, resp.json())`} />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </Block>

          {/* Errors */}
          <Block id="errors" title="Errors" icon={TerminalSquare}
            subtitle="Standardized JSON errors with an error code and message.">
            <CodeBlock
              code={`{
  "error": {
    "code": "invalid_request",
    "message": "Missing 'message' field"
  }
}`}
            />
            <InfoPanel rows={[
              ["4xx", "Client issues (authentication, validation, limits)."],
              ["5xx", "Server issues — retry with backoff."],
            ]}/>
          </Block>

          {/* Rate limits */}
          <Block id="rate-limits" title="Rate Limits" icon={Link2}
            subtitle="Burst-friendly shared quotas. Headers include limit/remaining/reset.">
            <InfoPanel rows={[
              ["Header: X-RateLimit-Limit", "Max requests in current window"],
              ["Header: X-RateLimit-Remaining", "Remaining requests"],
              ["Header: X-RateLimit-Reset", "Epoch seconds until reset"],
            ]}/>
          </Block>

          {/* Endpoints */}
          <div id="endpoints" className="scroll-mt-24">
            <h2 className="text-3xl font-bold">Endpoints</h2>
            <p className="text-slate-700 mt-2">
              All endpoints are JSON over HTTPS unless noted. Examples below assume
              <code className="mx-1 rounded bg-slate-100 px-1 py-0.5">Authorization: Bearer &lt;YOUR_API_KEY&gt;</code>.
            </p>
          </div>

          {/* Echo */}
          <Endpoint
            id="ep-echo"
            title="Echo"
            method="POST"
            path="/echo"
            description="Test endpoint — echoes your message."
            requestExample={`POST ${baseUrl}/echo
Content-Type: application/json

{ "message": "hello anoiak" }`}
            responseExample={`200 OK
Content-Type: application/json

{ "message": "hello anoiak", "ts": "2025-10-16T00:00:00Z" }`}
            schemaRows={[
              ["message", "string", "Required. Text to echo back."],
              ["ts", "string (ISO datetime)", "Server timestamp."],
            ]}
          />

          {/* Messages */}
          <Endpoint
            id="ep-messages"
            title="Messages (create)"
            method="POST"
            path="/messages"
            description="Create an AI-generated response for a user message."
            requestExample={`POST ${baseUrl}/messages
Content-Type: application/json

{
  "model": "gpt-4o-mini",
  "input": "Summarize this paragraph...",
  "temperature": 0.3
}`}
            responseExample={`200 OK

{
  "id": "msg_abc123",
  "object": "message",
  "model": "gpt-4o-mini",
  "output": "Here is the concise summary...",
  "usage": { "prompt_tokens": 128, "completion_tokens": 46, "total_tokens": 174 }
}`}
            schemaRows={[
              ["model", "string", "Required. Model name (e.g., gpt-4o-mini)."],
              ["input", "string", "Required. User prompt."],
              ["temperature", "number", "Optional. 0–1, defaults to 0.3."],
              ["output", "string", "Model response text."],
              ["usage", "object", "Token usage accounting."],
            ]}
            comingSoonNote="Add GET /messages/:id and streaming variants when ready."
          />

          {/* Files */}
          <Endpoint
            id="ep-files"
            title="Files (upload)"
            method="POST"
            path="/files"
            description="Upload a file for later retrieval or processing."
            requestExample={`POST ${baseUrl}/files
Content-Type: multipart/form-data

file: <binary>`}
            responseExample={`201 Created

{
  "id": "file_789",
  "object": "file",
  "filename": "notes.pdf",
  "bytes": 123456,
  "created_at": 1739558400
}`}
            schemaRows={[
              ["file", "binary", "Required. The file blob."],
              ["id", "string", "File identifier."],
              ["bytes", "number", "Size in bytes."],
              ["created_at", "number (epoch)", "Upload time."],
            ]}
            comingSoonNote="Add GET /files/:id and DELETE /files/:id when storage is enabled."
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}

/* ====================== small components ======================= */

function NavGroup({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div className="mb-6">
      <div className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">
        {title}
      </div>
      <ul className="space-y-1">
        {items.map((x) => (
          <li key={x.href}>
            <a
              href={x.href}
              className="block rounded-md px-3 py-2 text-sm hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-200"
            >
              <div className="flex items-center justify-between">
                <span>{x.label}</span>
                <ChevronRight className="h-4 w-4 text-slate-400" />
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Block({
  id,
  title,
  icon: Icon,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  icon?: React.ElementType;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="flex items-center gap-2">
        {Icon && (
          <div className="h-9 w-9 rounded-lg bg-slate-100 flex items-center justify-center">
            <Icon className="h-5 w-5 text-slate-700" />
          </div>
        )}
        <div>
          <h2 className="text-2xl font-bold">{title}</h2>
          {subtitle && <p className="text-slate-600">{subtitle}</p>}
        </div>
      </div>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function InfoPanel({ rows }: { rows: [string, string][] }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white overflow-hidden">
      <dl className="divide-y divide-slate-200">
        {rows.map(([k, v]) => (
          <div key={k} className="grid grid-cols-12 px-4 py-3">
            <dt className="col-span-4 md:col-span-3 text-slate-500">{k}</dt>
            <dd className="col-span-8 md:col-span-9 break-words">{v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function CodeBlock({ code }: { code: string }) {
  return (
    <pre className="rounded-lg bg-slate-900 text-slate-100 text-sm p-4 overflow-x-auto">
      <code>{code}</code>
    </pre>
  );
}

function Endpoint({
  id,
  title,
  method,
  path,
  description,
  requestExample,
  responseExample,
  schemaRows,
  comingSoonNote,
}: {
  id: string;
  title: string;
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  path: string;
  description: string;
  requestExample: string;
  responseExample: string;
  schemaRows: [string, string, string][];
  comingSoonNote?: string;
}) {
  const color = method === "GET" ? "bg-emerald-100 text-emerald-800 border-emerald-200"
    : method === "POST" ? "bg-blue-100 text-blue-800 border-blue-200"
    : method === "PUT" || method === "PATCH" ? "bg-amber-100 text-amber-800 border-amber-200"
    : "bg-rose-100 text-rose-800 border-rose-200";

  return (
    <section id={id} className="scroll-mt-24">
      <div className="flex items-center gap-3">
        <span className={`text-[11px] px-2.5 py-1 rounded border ${color}`}>{method}</span>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <div className="mt-1 text-slate-600">{description}</div>
      <div className="mt-2 font-mono text-sm text-slate-800">{path}</div>

      <div className="mt-4 grid md:grid-cols-2 gap-4">
        <div>
          <div className="text-sm font-medium text-slate-700 mb-2">Request</div>
          <CodeBlock code={requestExample} />
        </div>
        <div>
          <div className="text-sm font-medium text-slate-700 mb-2">Response</div>
          <CodeBlock code={responseExample} />
        </div>
      </div>

      <div className="mt-4">
        <div className="text-sm font-medium text-slate-700 mb-2">Schema</div>
        <div className="rounded-xl border border-slate-200 bg-white overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-slate-600">
              <tr>
                <th className="text-left px-4 py-2">Field</th>
                <th className="text-left px-4 py-2">Type</th>
                <th className="text-left px-4 py-2">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {schemaRows.map(([f, t, d]) => (
                <tr key={f}>
                  <td className="px-4 py-2 font-mono">{f}</td>
                  <td className="px-4 py-2">{t}</td>
                  <td className="px-4 py-2">{d}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {comingSoonNote && (
          <div className="mt-3 rounded-lg border border-amber-200 bg-amber-50 text-amber-900 px-3 py-2 text-sm">
            {comingSoonNote}
          </div>
        )}
      </div>
    </section>
  );
}
