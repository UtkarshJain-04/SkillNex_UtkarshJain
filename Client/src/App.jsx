import { Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup.jsx";
import Layout from "./layout/Layout.jsx";
import Login from "./pages/Login.jsx";
import ProjectFeed from "./pages/ProjectFeed.jsx";
import EventFeed from "./pages/EventFeed.jsx";
import ConnectionFeed from "./pages/connectionFeed.jsx";
import CreateEvent from "./pages/CreateEvent.jsx";
import JobFeed from "./pages/JobFeed.jsx";
import MyEvents from "./pages/MyEvents.jsx";
import PendingRequests from "./pages/PendingRequests.jsx";
import Home from "./pages/Home.jsx";
import ConnectedPeople from "./pages/ConnectedPeople.jsx";
import CreateProject from "./pages/CreateProject.jsx";
import Start from "./pages/Start.jsx";
import ProtectedRoute from "./components/protectedRoute.jsx";
import PublicRoute from "./components/publicRoute.jsx";
import Myprojects from "./pages/Myprojects.jsx";
import MyProfile from "./pages/myProfile.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Start />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/my-profile"
          element={
            <ProtectedRoute>
              <MyProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoute>
              <Signup />
            </PublicRoute>
          }
        />
        <Route
          path="/connection-feed"
          element={
            <ProtectedRoute>
              <ConnectionFeed />
            </ProtectedRoute>
          }
        />
        <Route
          path="/eventFeed"
          element={
            <ProtectedRoute>
              <EventFeed />
            </ProtectedRoute>
          }
        />
        <Route
          path="/create-event"
          element={
            <ProtectedRoute>
              <CreateEvent />
            </ProtectedRoute>
          }
        />
        <Route
          path="/myevents"
          element={
            <ProtectedRoute>
              <MyEvents />
            </ProtectedRoute>
          }
        />
        <Route
          path="/project-Feed"
          element={
            <ProtectedRoute>
              <ProjectFeed />
            </ProtectedRoute>
          }
        />

        <Route
          path="/myprojects"
          element={
            <ProtectedRoute>
              <Myprojects />
            </ProtectedRoute>
          }
        />

        <Route
          path="/create-project"
          element={
            <ProtectedRoute>
              <CreateProject />
            </ProtectedRoute>
          }
        />
        <Route
          path="/job-Feed"
          element={
            <ProtectedRoute>
              <JobFeed />
            </ProtectedRoute>
          }
        />
        <Route
          path="/pending-requests"
          element={
            <ProtectedRoute>
              <PendingRequests />
            </ProtectedRoute>
          }
        />
        <Route
          path="/accepted-connections"
          element={
            <ProtectedRoute>
              <ConnectedPeople />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
