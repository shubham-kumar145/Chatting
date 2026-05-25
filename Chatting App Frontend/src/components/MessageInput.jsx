import { useRef, useState } from "react";
import { useChatStore } from "../store/useChatStore";
import { Image, Send, X } from "lucide-react";
import toast from "react-hot-toast";

const MessageInput = () => {
  const [text, setText] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);
  const { sendMessage } = useChatStore();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!text.trim() && !imagePreview) return;

    try {
      await sendMessage({
        text: text.trim(),
        image: imagePreview,
      });

      // Clear form
      setText("");
      setImagePreview(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  return (
    <div className="p-4 w-full">
      {imagePreview && (
        <div className="mb-3 flex items-center gap-2">
          <div className="relative">
            <img
              src={imagePreview}
              alt="Preview"
              className="w-20 h-20 object-cover rounded-lg border border-zinc-700"
            />
            <button
              onClick={removeImage}
              className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-base-300
              flex items-center justify-center"
              type="button"
            >
              <X className="size-3" />
            </button>
          </div>
        </div>
      )}

      <form onSubmit={handleSendMessage} className="flex items-center gap-2">
        <div className="flex-1 flex gap-2">
          <input
            type="text"
            className="w-full input input-bordered rounded-lg input-sm sm:input-md"
            placeholder="Type a message..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <input
            type="file"
            accept="image/*"
            className="hidden"
            ref={fileInputRef}
            onChange={handleImageChange}
          />

          <button
            type="button"
            className={`hidden sm:flex btn btn-circle
                     ${imagePreview ? "text-emerald-500" : "text-zinc-400"}`}
            onClick={() => fileInputRef.current?.click()}
          >
            <Image size={20} />
          </button>
        </div>
        <button
          type="submit"
          className="btn btn-sm btn-circle"
          disabled={!text.trim() && !imagePreview}
        >
          <Send size={22} />
        </button>
      </form>
    </div>
  );
};
export default MessageInput;


// import { useRef, useState } from "react";
// import { useChatStore } from "../store/useChatStore";
// import { Image, Send, X, Smile, Paperclip } from "lucide-react";
// import toast from "react-hot-toast";

// const MessageInput = () => {
//   const [text, setText] = useState("");
//   const [imagePreview, setImagePreview] = useState(null);
//   const [imageName, setImageName] = useState("");
//   const fileInputRef = useRef(null);
//   const { sendMessage } = useChatStore();

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (!file.type.startsWith("image/")) {
//       toast.error("Please select an image file");
//       return;
//     }
//     setImageName(file.name);
//     const reader = new FileReader();
//     reader.onloadend = () => setImagePreview(reader.result);
//     reader.readAsDataURL(file);
//   };

//   const removeImage = () => {
//     setImagePreview(null);
//     setImageName("");
//     if (fileInputRef.current) fileInputRef.current.value = "";
//   };

//   const handleSendMessage = async (e) => {
//     e.preventDefault();
//     if (!text.trim() && !imagePreview) return;
//     try {
//       await sendMessage({ text: text.trim(), image: imagePreview });
//       setText("");
//       setImagePreview(null);
//       setImageName("");
//       if (fileInputRef.current) fileInputRef.current.value = "";
//     } catch (error) {
//       console.error("Failed to send message:", error);
//     }
//   };

//   const canSend = text.trim() || imagePreview;

//   return (
//     <div className="px-4 pb-4 pt-2">
//       <input
//         type="file"
//         accept="image/*"
//         className="hidden"
//         ref={fileInputRef}
//         onChange={handleImageChange}
//       />

//       {/* Image preview pill */}
//       {imagePreview && (
//         <div className="mb-2 flex items-center gap-3 bg-base-100 border border-base-200 rounded-2xl px-3 py-2.5">
//           <img
//             src={imagePreview}
//             alt="Preview"
//             className="w-10 h-10 rounded-lg object-cover border border-base-300 flex-shrink-0"
//           />
//           <div className="flex-1 min-w-0">
//             <p className="text-xs font-medium truncate">{imageName}</p>
//             <p className="text-[10px] text-base-content/40 mt-0.5">Ready to send</p>
//           </div>
//           <button
//             onClick={removeImage}
//             type="button"
//             className="w-5 h-5 rounded-full bg-base-200 flex items-center justify-center hover:bg-base-300 transition-colors flex-shrink-0"
//           >
//             <X className="size-3" />
//           </button>
//         </div>
//       )}

//       {/* Input box */}
//       <form
//         onSubmit={handleSendMessage}
//         className="flex flex-col bg-base-100 border border-base-200 rounded-2xl px-3.5 pt-2.5 pb-2 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/10 transition-all"
//       >
//         <input
//           type="text"
//           className="w-full bg-transparent border-none outline-none text-sm placeholder:text-base-content/30 mb-2"
//           placeholder={imagePreview ? "Add a caption…" : "Type a message…"}
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//         />

//         {/* Toolbar row */}
//         <div className="flex items-center justify-between">
//           <div className="flex items-center gap-0.5">
//             <button
//               type="button"
//               onClick={() => fileInputRef.current?.click()}
//               className={`p-1.5 rounded-lg hover:bg-base-200 transition-colors ${
//                 imagePreview ? "text-primary" : "text-base-content/40 hover:text-base-content/70"
//               }`}
//             >
//               <Image size={17} />
//             </button>
//             <button
//               type="button"
//               className="p-1.5 rounded-lg text-base-content/40 hover:text-base-content/70 hover:bg-base-200 transition-colors"
//             >
//               <Smile size={17} />
//             </button>
//             <button
//               type="button"
//               className="p-1.5 rounded-lg text-base-content/40 hover:text-base-content/70 hover:bg-base-200 transition-colors"
//             >
//               <Paperclip size={17} />
//             </button>
//           </div>

//           <div className="flex items-center gap-2">
//             {text && (
//               <span className="text-[10px] text-base-content/30">{text.length}</span>
//             )}
//             <button
//               type="submit"
//               disabled={!canSend}
//               className="w-8 h-8 rounded-full bg-primary text-primary-content flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:opacity-90 transition-opacity"
//             >
//               <Send size={14} />
//             </button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default MessageInput;
