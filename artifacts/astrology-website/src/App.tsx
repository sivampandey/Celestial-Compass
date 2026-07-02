import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Splash from "@/components/Splash";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { setBaseUrl } from "@workspace/api-client-react";
import Login from "@/admin/Login";
import Dashboard from "@/admin/Dashboard";

const queryClient = new QueryClient();

setBaseUrl(import.meta.env.VITE_API_URL);

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/admin/login" component={Login} />
      <Route path="/admin/dashboard" component={Dashboard} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const currentPath = window.location.pathname;

  const isAdmin =
    currentPath.startsWith("/admin");

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>

          {!isAdmin && <Splash />}

          <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground flex flex-col">

            {!isAdmin && <Navbar />}

            <main className="flex-1">
              <Router />
            </main>

            {!isAdmin && <Footer />}

            {!isAdmin && <FloatingButtons />}

          </div>

        </WouterRouter>

        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
