import React, { createContext, useState, useContext, ReactNode, useEffect } from "react";
import api from "../services/api"; // تأكد من أن هذا يستورد مثيل Axios الخاص بك
import { useNavigate } from "react-router-dom";

// تعريف أنواع البيانات المستخدمة في الـ Context
interface AuthContextProps {
  user: User | null; // بيانات المستخدم
  isAuthenticated: boolean; // حالة التوثيق (هل المستخدم مسجل دخوله)
  login: (username: string, password: string) => Promise<void>; // دالة لتسجيل الدخول
  register: (username: string, email: string, password: string) => Promise<void>; // دالة للتسجيل
  logout: () => Promise<void>; // دالة لتسجيل الخروج
  resetPassword: (token: string, newPassword: string) => Promise<void>; // دالة لإعادة تعيين كلمة المرور
  forgotPassword: (email: string) => Promise<void>; // دالة لإرسال رابط إعادة تعيين كلمة المرور
}

// تعريف هيكل بيانات المستخدم
interface User {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  accessToken: string;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null); // الحالة لتخزين بيانات المستخدم
  const navigate = useNavigate(); // لاستخدام التنقل بين الصفحات

  // التحقق مما إذا كان هناك توكن مخزن في localStorage عند تحميل التطبيق
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");

    if (accessToken && refreshToken) {
      const userData = JSON.parse(localStorage.getItem("user") || "{}");
      setUser({ ...userData, accessToken });
    }
  }, []);

  // التحقق مما إذا كان المستخدم مسجلاً دخوله
  const isAuthenticated = !!user;

  // دالة لتسجيل الدخول
  const login = async (username: string, password: string) => {
    try {
      // إرسال طلب إلى الخادم لتسجيل الدخول
      const response = await api.post("/auth/users/login/", { username, password });
      const { access, refresh, user: userData } = response.data;

      // تخزين التوكنات وبيانات المستخدم في localStorage
      localStorage.setItem("accessToken", access);
      localStorage.setItem("refreshToken", refresh);
      localStorage.setItem("user", JSON.stringify(userData));

      // تحديث حالة المستخدم في التطبيق
      setUser({ ...userData, accessToken: access });

      // التنقل إلى لوحة التحكم بعد تسجيل الدخول
      navigate("/dashboard");
    } catch (error) {
      console.error("فشل تسجيل الدخول:", error);
      alert("بيانات الدخول غير صحيحة");
    }
  };

  // دالة للتسجيل
  const register = async (username: string, email: string, password: string) => {
    try {
      // إرسال طلب إلى الخادم للتسجيل
      await api.post("/auth/users/register/", { username, email, password });
      navigate("/login"); // التنقل إلى صفحة تسجيل الدخول بعد التسجيل الناجح
    } catch (error) {
      console.error("فشل التسجيل:", error);
      alert("فشل التسجيل. يرجى المحاولة مرة أخرى.");
    }
  };

  // دالة لتسجيل الخروج
  const logout = async () => {
    try {
      // إرسال طلب إلى الخادم لتسجيل الخروج
      await api.post("/auth/users/logout/", {
        refreshToken: localStorage.getItem("refreshToken"), // إرسال التوكن لإبطال التوثيق
      });

      // مسح بيانات المستخدم والتوكنات من localStorage
      setUser(null);
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("user");

      // التنقل إلى صفحة تسجيل الدخول بعد تسجيل الخروج
      navigate("/login");
    } catch (error) {
      console.error("فشل تسجيل الخروج:", error);
      alert("فشل الخروج. يرجى المحاولة مرة أخرى.");
    }
  };

  // دالة لإعادة تعيين كلمة المرور
  const resetPassword = async (token: string, newPassword: string) => {
    try {
      // إرسال طلب إلى الخادم لتغيير كلمة المرور
      await api.post("/auth/users/reset-password/", { token, newPassword });
      alert("تم إعادة تعيين كلمة المرور بنجاح. يرجى تسجيل الدخول باستخدام كلمة المرور الجديدة.");
      navigate("/login"); // التنقل إلى صفحة تسجيل الدخول بعد إعادة تعيين كلمة المرور
    } catch (error) {
      console.error("فشل إعادة تعيين كلمة المرور:", error);
      alert("فشل إعادة تعيين كلمة المرور. يرجى المحاولة مرة أخرى.");
    }
  };

  // دالة لإرسال رابط إعادة تعيين كلمة المرور
  const forgotPassword = async (email: string) => {
    try {
      // إرسال طلب إلى الخادم لإرسال رابط إعادة تعيين كلمة المرور
      await api.post("/auth/auth/forgot-password/", { email });
    } catch (error) {
      console.error("فشل إرسال رابط إعادة تعيين كلمة المرور:", error);
    }
  };

  // توفير البيانات التي يمكن الوصول إليها في جميع أنحاء التطبيق
  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, login, register, logout, resetPassword, forgotPassword }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// استخدام الـ Context في المكونات الأخرى
export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("يجب استخدام useAuth داخل AuthProvider");
  }
  return context;
};
