// client/src/App.tsx
import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import PrivacyPolicy from "@/legal/privacy-policy/PrivacyPolicy";
import TermsOfService from "@/legal/terms-of-service/TermsOfService";
import CookiePolicy from "@/legal/cookie-policy/CookiePolicy";
import SupportCenter from "@/resources/support-center/SupportCenter";
import Documentation from "@/resources/documentation/Documentation";
import APIReference from "@/resources/api-reference/APIReference";


// your existing app bits
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

// pages
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";

// blog routes
import BlogIndex from "@/routes/BlogIndex";
import BlogPost from "@/routes/BlogPost";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/blog" component={BlogIndex} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-of-service" component={TermsOfService} />
      <Route path="/cookie-policy" component={CookiePolicy}/>
      <Route path="/resources/support-center" component={SupportCenter} />
      <Route path="/resources/documentation" component={Documentation} />
      <Route path="/resources/api-reference" component={APIReference} />

      
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
