// import { useState } from "react";
// import { useAuthStore } from "../store/useAuthStore";
// import { Camera, Mail, User } from "lucide-react";

// const ProfilePage = () => {
//   const { authUser, isUpdatingProfile, updateProfile } = useAuthStore();
//   const [selectedImg, setSelectedImg] = useState(null);

//   const handleImageUpload = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     const reader = new FileReader();

//     reader.readAsDataURL(file);

//     reader.onload = async () => {
//       const base64Image = reader.result;
//       setSelectedImg(base64Image);
//       await updateProfile({ profilePic: base64Image });
//     };
//   };

//   return (
//     <div className="h-screen pt-20">
//       <div className="max-w-2xl mx-auto p-4 py-8">
//         <div className="bg-base-300 rounded-xl p-6 space-y-8">
//           <div className="text-center">
//             <h1 className="text-2xl font-semibold ">Profile</h1>
//             <p className="mt-2">Your profile information</p>
//           </div>

//           {/* avatar upload section */}

//           <div className="flex flex-col items-center gap-4">
//             <div className="relative">
//               <img
//                 src={selectedImg || authUser.profilePic || "/avatar.png"}
//                 alt="Profile"
//                 className="size-32 rounded-full object-cover border-4 "
//               />
//               <label
//                 htmlFor="avatar-upload"
//                 className={`
//                   absolute bottom-0 right-0 
//                   bg-base-content hover:scale-105
//                   p-2 rounded-full cursor-pointer 
//                   transition-all duration-200
//                   ${isUpdatingProfile ? "animate-pulse pointer-events-none" : ""}
//                 `}
//               >
//                 <Camera className="w-5 h-5 text-base-200" />
//                 <input
//                   type="file"
//                   id="avatar-upload"
//                   className="hidden"
//                   accept="image/*"
//                   onChange={handleImageUpload}
//                   disabled={isUpdatingProfile}
//                 />
//               </label>
//             </div>
//             <p className="text-sm text-zinc-400">
//               {isUpdatingProfile ? "Uploading..." : "Click the camera icon to update your photo"}
//             </p>
//           </div>

//           <div className="space-y-6">
//             <div className="space-y-1.5">
//               <div className="text-sm text-zinc-400 flex items-center gap-2">
//                 <User className="w-4 h-4" />
//                 Full Name
//               </div>
//               <p className="px-4 py-2.5 bg-base-200 rounded-lg border">{authUser?.fullName}</p>
//             </div>

//             <div className="space-y-1.5">
//               <div className="text-sm text-zinc-400 flex items-center gap-2">
//                 <Mail className="w-4 h-4" />
//                 Email Address
//               </div>
//               <p className="px-4 py-2.5 bg-base-200 rounded-lg border">{authUser?.email}</p>
//             </div>
//           </div>

//           <div className="mt-6 bg-base-300 rounded-xl p-6">
//             <h2 className="text-lg font-medium  mb-4">Account Information</h2>
//             <div className="space-y-3 text-sm">
//               <div className="flex items-center justify-between py-2 border-b border-zinc-700">
//                 <span>Member Since</span>
//                 <span>{authUser.createdAt?.split("T")[0]}</span>
//               </div>
//               <div className="flex items-center justify-between py-2">
//                 <span>Account Status</span>
//                 <span className="text-green-500">Active</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default ProfilePage;





import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Camera, Mail, User, Calendar, ShieldCheck, Pencil } from "lucide-react";

const ProfilePage = () => {
  const { authUser, isUpdatingProfile, updateProfile } = useAuthStore();
  const [selectedImg, setSelectedImg] = useState(null);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      await updateProfile({ profilePic: base64Image });
    };
  };

  return (
    <div className="min-h-screen pt-16 bg-base-200/40">
      <div className="max-w-lg mx-auto p-4 py-8">
        <div className="bg-base-100 rounded-2xl border border-base-200 overflow-hidden">

          {/* Card header banner */}
          <div className="bg-base-200/60 px-6 pt-6 pb-12 text-center border-b border-base-200">
            <h1 className="text-[15px] font-medium">Profile</h1>
            <p className="text-xs text-base-content/40 mt-1">Manage your personal information</p>
          </div>

          <div className="px-6">
            {/* Avatar — overlaps banner */}
            <div className="flex flex-col items-center -mt-10 mb-3">
              <div className="relative">
                <img
                  src={selectedImg || authUser.profilePic || "/avatar.png"}
                  alt="Profile"
                  className="w-20 h-20 rounded-full object-cover border-[3px] border-base-100"
                />
                <label
                  htmlFor="avatar-upload"
                  className={`absolute bottom-0.5 right-0.5 w-6 h-6 rounded-full bg-primary flex items-center justify-center cursor-pointer border-2 border-base-100 hover:opacity-90 transition-opacity ${
                    isUpdatingProfile ? "animate-pulse pointer-events-none" : ""
                  }`}
                >
                  <Camera className="w-3 h-3 text-primary-content" />
                  <input
                    type="file"
                    id="avatar-upload"
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageUpload}
                    disabled={isUpdatingProfile}
                  />
                </label>
              </div>
              <p className="text-[11px] text-base-content/40 mt-2">
                {isUpdatingProfile ? "Uploading…" : "Click to update photo"}
              </p>
            </div>

            {/* Fields */}
            <div className="space-y-3 mb-5">
              {[
                { icon: User, label: "Full name", value: authUser?.fullName },
                { icon: Mail, label: "Email address", value: authUser?.email },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label}>
                  <div className="flex items-center gap-1.5 text-[11px] text-base-content/40 mb-1.5">
                    <Icon className="w-3.5 h-3.5" />
                    {label}
                  </div>
                  <div className="flex items-center justify-between bg-base-200/50 border border-base-200 rounded-lg px-3 py-2.5">
                    <span className="text-sm">{value}</span>
                    <Pencil className="w-3.5 h-3.5 text-base-content/30 hover:text-primary cursor-pointer transition-colors" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-base-200" />

          {/* Account info */}
          <div className="px-6 py-4">
            <p className="text-[11px] font-medium text-base-content/40 mb-3 uppercase tracking-wide">
              Account information
            </p>
            <div className="space-y-0">
              {[
                { icon: Calendar, label: "Member since", value: authUser.createdAt?.split("T")[0] },
                { icon: ShieldCheck, label: "Account status", value: null, badge: "Active" },
              ].map(({ icon: Icon, label, value, badge }) => (
                <div key={label} className="flex items-center justify-between py-2.5 border-b border-base-200 last:border-0">
                  <div className="flex items-center gap-2 text-xs text-base-content/50">
                    <Icon className="w-3.5 h-3.5" />
                    {label}
                  </div>
                  {badge ? (
                    <span className="text-[11px] bg-success/10 text-success px-2.5 py-0.5 rounded-full">
                      {badge}
                    </span>
                  ) : (
                    <span className="text-xs font-medium">{value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
