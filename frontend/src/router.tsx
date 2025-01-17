import { Route, Routes, BrowserRouter } from "react-router-dom";
import { LoginView } from "./views/LoginView";
import { RegisterView } from "./views/RegisterView";
import { AuthLayout } from "./layouts/AuthLayout";
import AppLayout from "./layouts/AppLayout";
import LinkTree from "./views/LinkTreeView";
import ProfileView from "./views/ProfileView";
import HandleView from "./views/HandleView";
import NotFound from "./views/NotFound";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/auth/login" element={<LoginView />} />
          <Route path="/auth/register" element={<RegisterView />} />
        </Route>
        <Route path="/admin" element={<AppLayout />}>
          <Route index={true} element={<LinkTree />} />
          <Route path="profile" element={<ProfileView />} />
        </Route>
        <Route path="/:handle" element={<AuthLayout />}>
          <Route element={<HandleView />} index={true} />
        </Route>
        <Route path="/404" element={<AuthLayout />}>
          <Route element={<NotFound />} index={true} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
