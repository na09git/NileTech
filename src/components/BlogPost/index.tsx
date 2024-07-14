"use client";
import { createPost } from "@/app/services/blogService";
import React, { useState } from "react";
import { useSession } from "next-auth/react";

const BlogPost: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState("Blog post title");
  const { status, data: session } = useSession();
  console.log("data:  ");
  const [date, setDate] = useState(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${day}-${month}-${year}`;
  });
  const [imageSrc, setImageSrc] = useState(
    "https://images.unsplash.com/photo-1493723843671-1d655e66ac1c",
  );
  const [content, setContent] =
    useState(`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
  varius fringilla augue, vel vestibulum nisl mattis vel. Praesent
  porttitor pharetra purus eu tincidunt.

  Nullam vitae sapien non est suscipit blandit quis sit amet ipsum.
  Aliquam euismod accumsan nunc, in convallis felis luctus in. Sed
  rhoncus metus a elit rutrum aliquam.

  Integer ullamcorper leo nulla, nec commodo metus vehicula eget. Duis
  vel vestibulum tellus, eget mattis quam. Nullam euismod libero sed
  nibh tristique, vel eleifend risus sagittis. In hac habitasse platea
  dictumst. Sed dapibus magna at arcu euismod, a pulvinar turpis
  tristique. Suspendisse imperdiet velit nec lectus rutrum varius.`);

  const handleSave = async () => {
    setIsEditing(false);
    try {
      const newPost = await createPost({
        title,
        content,
        imageUrl: imageSrc,
        authorId: session.user.id, // Replace with actual author ID
        categoryId: "Education", // Replace with actual category ID
      });
      console.log("Post created successfully:", newPost);
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setImageSrc(imageUrl);
    }
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const dateValue = e.target.value;
    const [year, month, day] = dateValue.split("-");
    setDate(`${day}-${month}-${year}`);
  };

  const formatDateForInput = (dateStr: string) => {
    const [day, month, year] = dateStr.split("-");
    return `${year}-${month}-${day}`;
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="py-8">
          {isEditing ? (
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mb-2 w-full text-3xl font-bold"
            />
          ) : (
            <h1 className="mb-2 text-3xl font-bold">{title}</h1>
          )}
          <p className="text-sm text-gray-500">
            Published on{" "}
            {isEditing ? (
              <input
                type="date"
                value={formatDateForInput(date)}
                onChange={handleDateChange}
                className="text-sm text-gray-500"
              />
            ) : (
              <time dateTime={date}>{date}</time>
            )}
          </p>
        </div>

        {isEditing ? (
          <div>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="mb-4"
            />
            {imageSrc && (
              <img
                src={imageSrc}
                alt="Preview"
                className="mb-8 h-auto w-full"
              />
            )}
          </div>
        ) : (
          <img
            src={imageSrc}
            alt="Featured image"
            className="mb-8 h-auto w-full"
          />
        )}

        {isEditing ? (
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto h-64 w-full"
          />
        ) : (
          <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto">
            {content.split("\n\n").map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        )}

        <div className="mt-4 flex items-center space-x-4">
          {isEditing ? (
            <button
              type="button"
              onClick={handleSave}
              className="inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                aria-hidden="true"
                className="-ml-1 mr-1 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a2 2 0 012-2h4a2 2 0 012 2v1h1a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2V5a2 2 0 012-2h1V2zm1 1v2H3v10h14V5h-4V3H7zm0 5h6v6H7V8zm1 1v4h4V9H8z"
                  clipRule="evenodd"
                />
              </svg>
              Save
            </button>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              type="button"
              className="inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                aria-hidden="true"
                className="-ml-1 mr-1 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
                <path
                  fillRule="evenodd"
                  d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;

// "use client";
// import React, { useState } from "react";

// const BlogPost: React.FC = () => {
//   // State to hold the blog post details
//   const [isEditing, setIsEditing] = useState(false);
//   const [title, setTitle] = useState("Blog post title");
//   const [date, setDate] = useState(() => {
//     const today = new Date();
//     const year = today.getFullYear();
//     const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are 0-based, so add 1
//     const day = String(today.getDate()).padStart(2, "0");
//     return `${day}-${month}-${year}`;
//   });

//   const [imageSrc, setImageSrc] = useState(
//     "https://images.unsplash.com/photo-1493723843671-1d655e66ac1c",
//   );
//   const [content, setContent] =
//     useState(`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
//   varius fringilla augue, vel vestibulum nisl mattis vel. Praesent
//   porttitor pharetra purus eu tincidunt.

//   Nullam vitae sapien non est suscipit blandit quis sit amet ipsum.
//   Aliquam euismod accumsan nunc, in convallis felis luctus in. Sed
//   rhoncus metus a elit rutrum aliquam.

//   Integer ullamcorper leo nulla, nec commodo metus vehicula eget. Duis
//   vel vestibulum tellus, eget mattis quam. Nullam euismod libero sed
//   nibh tristique, vel eleifend risus sagittis. In hac habitasse platea
//   dictumst. Sed dapibus magna at arcu euismod, a pulvinar turpis
//   tristique. Suspendisse imperdiet velit nec lectus rutrum varius.`);

//   const handleSave = () => {
//     setIsEditing(false);
//     // Perform any save actions (e.g., API calls) here
//   };

//   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files[0]) {
//       const file = e.target.files[0];
//       const imageUrl = URL.createObjectURL(file);
//       setImageSrc(imageUrl);
//     }
//   };

//   const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const dateValue = e.target.value; // YYYY-MM-DD
//     const [year, month, day] = dateValue.split("-");
//     setDate(`${day}-${month}-${year}`);
//   };

//   const formatDateForInput = (dateStr: string) => {
//     const [day, month, year] = dateStr.split("-");
//     return `${year}-${month}-${day}`;
//   };

//   return (
//     <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//       <div className="mx-auto max-w-3xl">
//         <div className="py-8">
//           {isEditing ? (
//             <input
//               type="text"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               className="mb-2 w-full text-3xl font-bold"
//             />
//           ) : (
//             <h1 className="mb-2 text-3xl font-bold">{title}</h1>
//           )}
//           <p className="text-sm text-gray-500">
//             Published on{" "}
//             {isEditing ? (
//               <input
//                 type="date"
//                 value={formatDateForInput(date)}
//                 onChange={handleDateChange}
//                 className="text-sm text-gray-500"
//               />
//             ) : (
//               // <time dateTime={date}>{new Date(date).toLocaleDateString()}</time>
//               <time dateTime={date}>{date}</time>
//             )}
//           </p>
//         </div>

//         {isEditing ? (
//           <div>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleImageChange}
//               className="mb-4"
//             />
//             {imageSrc && (
//               <img
//                 src={imageSrc}
//                 alt="Preview"
//                 className="mb-8 h-auto w-full"
//               />
//             )}
//           </div>
//         ) : (
//           <img
//             src={imageSrc}
//             alt="Featured image"
//             className="mb-8 h-auto w-full"
//           />
//         )}

//         {isEditing ? (
//           <textarea
//             value={content}
//             onChange={(e) => setContent(e.target.value)}
//             className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto h-64 w-full"
//           />
//         ) : (
//           <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto">
//             {content.split("\n\n").map((paragraph, idx) => (
//               <p key={idx}>{paragraph}</p>
//             ))}
//           </div>
//         )}

//         <div className="mt-4 flex items-center space-x-4">
//           {isEditing ? (
//             <button
//               type="button"
//               onClick={handleSave}
//               className="inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//             >
//               <svg
//                 aria-hidden="true"
//                 className="-ml-1 mr-1 h-5 w-5"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M6 2a2 2 0 012-2h4a2 2 0 012 2v1h1a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2V5a2 2 0 012-2h1V2zm1 1v2H3v10h14V5h-4V3H7zm0 5h6v6H7V8zm1 1v4h4V9H8z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//               Save
//             </button>
//           ) : (
//             <button
//               onClick={() => setIsEditing(true)}
//               type="button"
//               className="inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//             >
//               <svg
//                 aria-hidden="true"
//                 className="-ml-1 mr-1 h-5 w-5"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
//                 <path
//                   fillRule="evenodd"
//                   d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
//                   clipRule="evenodd"
//                 ></path>
//               </svg>
//               Edit
//             </button>

//             // <button
//             //   type="button"
//             // onClick={() => setIsEditing(true)}
//             //   className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 inline-flex items-center rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4"
//             // >
//             //   <svg
//             //     aria-hidden="true"
//             //     className="-ml-1 mr-1 h-5 w-5"
//             //     fill="currentColor"
//             //     viewBox="0 0 20 20"
//             //     xmlns="http://www.w3.org/2000/svg"
//             //   >
//             //     <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
//             //     <path
//             //       fillRule="evenodd"
//             //       d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
//             //       clipRule="evenodd"
//             //     ></path>
//             //   </svg>
//             //   Edit
//             // </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogPost;
