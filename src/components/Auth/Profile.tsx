import React from "react";
import { useAuth } from "../../context/AuthContext";

const Profile: React.FC = () => {
  const { user } = useAuth();

  // في حالة عدم وجود بيانات المستخدم، يتم عرض رسالة تخبر المستخدم بضرورة تسجيل الدخول
  if (!user) {
    return (
      <div className="min-h-screen bg-[#DCECE4] flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-center">
          <h2 className="text-3xl font-bold mb-4 text-[#9E9195]">لا توجد بيانات</h2>
          <p className="text-[#C0C7C8]">يرجى تسجيل الدخول لعرض بيانات ملفك الشخصي.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#DCECE4] flex justify-center ">
      <div className="bg-white shadow-xl w-full h-full ">
        {/* رأس الصفحة - يحتوي على صورة وخلفية ملونة وبيانات المستخدم الأساسية */}
        <div
          className="rounded-b-lg text-white text-center py-8 px-4 bg-gradient-to-b from-primary to-third w-full "

        >
          {/* عرض صورة افاتار بناءً على اسم المستخدم */}
          <img
            src={`https://ui-avatars.com/api/?name=${user.first_name}+${user.last_name}&background=DCECE4&color=9E9195`}
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto border-4 border-white mb-4"
          />
          <h2 className="text-2xl font-bold text-[#DCECE4]">{`${user.first_name} ${user.last_name}`}</h2>
          <p className="text-[#F5F5F5]">{user.email}</p>
        </div>

        {/* جسم الصفحة - يحتوي على معلومات المستخدم التفصيلية */}
        <div className="p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* معلومات شخصية */}
            <div>
              <h3 className="text-lg font-semibold text-[#9E9195] mb-2">المعلومات الشخصية</h3>
              <ul className="text-[#BAAD87] space-y-2">
                <li>
                  <strong>الرقم التعريفي:</strong> {user.id}
                </li>
                <li>
                  <strong>اسم المستخدم:</strong> {user.username}
                </li>
              </ul>
            </div>

            {/* معلومات الاتصال */}
            <div>
              <h3 className="text-lg font-semibold text-[#9E9195] mb-2">معلومات الاتصال</h3>
              <ul className="text-[#BAAD87] space-y-2">
                <li>
                  <strong>البريد الإلكتروني:</strong> {user.email}
                </li>
              </ul>
            </div>
          </div>

          {/* زر تعديل البيانات */}
          <div className="mt-8 flex justify-center">
          <button
  className="text-white font-bold py-2 px-6 rounded-lg shadow-lg transition duration-300 bg-gradient-to-r from-primary to-secondary hover:opacity-90"
>
  تعديل الملف الشخصي
</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
