import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

let heroLink = [
  { name: "Women's Fashion" },
  { name: "Men's Fashion" },
  { name: "Electronics" },
  { name: "Home & Lifestyle" },
  { name: "Medicine" },
  { name: "Sports & Outdoor" },
  { name: "Baby's & Toys" },
  { name: "Groceries & Pets" },
  { name: "Health & Beauty" },
];

export default function Hero() {
  const [selectedCategory, setSelectedCategory] = useState(""); 

  return (
    <div className="flex justify-center items-center px-4 py-6">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-6">

      
        <div className="lg:hidden w-full mb-4">
          <select
            className="w-full p-3 border rounded-md shadow-md bg-primary bdr text-white-700"
            onChange={(e) => setSelectedCategory(e.target.value)} // Optional handler
            value={selectedCategory}
          >
            <option value="" disabled>Select a category</option>
            {heroLink.map((item, index) => (
              <option key={index} value={item.name}>{item.name}</option>
            ))}
          </select>
        </div>

        
        <div className="lg:w-1/4 w-full bg-white shadow-md rounded-md p-6 hidden lg:block">
          <ul className="space-y-4">
            {heroLink.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer hover:text-red-500 transition-colors duration-300 text-lg"
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>

  
        <div className="lg:w-3/4 w-full bg-black text-white rounded-md p-8 flex flex-col lg:flex-row items-center lg:items-start">
          
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-4">
              <img
                src="https://s3-alpha-sig.figma.com/img/1126/a357/e5011a6f245df4c38eae015c7c9ccbe7?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mgFdjuikyJs7e6JGiYMfhCTEwtMJFEbqT-cNiMnTQ6Kr0c-QbPBuBgztOA0n76KgwsHi68YsDwFmYkElf8e~5jYqP5uKbBnloBHgGT6jP5XK9x9GaIF-XXBSc~udD3crxkxzxKSA9QWCl3hg2HDTwZacFtm95DEbq1c9tz5VgOUg1HtwlEru5I4vuwuYxMtzxrBQGry8PwCmfGcXdxlbKB-5Yb9Xh9gi4QnBaw5P2LcDl1BKWJ1krTrfPwltH7LYvZh8eyFf87Dfo-Ej9~WeR2r3khA7o1uHfzNPp1JwwY96tQnrlfJyDgnMqmofVYGYgFOfGnJxsxZjSlOWxA8Ojw__"
                alt="iPhone 14"
                className="w-12 h-12"
              />
              <h5 className="text-lg">iPhone 14 Series</h5>
            </div>
            <h1 className="text-4xl lg:text-6xl font-semibold leading-tight">
              <span>Up to 10% </span><br />
              <span>Off Voucher</span>
            </h1>
            <div className="flex items-center gap-2 text-red-400 cursor-pointer hover:text-red-300 transition">
              Shop Now <FaArrowRight />
            </div>
          </div>

          <div className="flex-shrink-0 mt-6 lg:mt-0">
            <img
              src="https://s3-alpha-sig.figma.com/img/dc40/ba89/7215f42e5883a64157f0aa3a4d1a866a?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PHJ6w0GEEd~982wPgcgkyKGMmkpByMD0kDNVXEEenvCedyJkaOBH62-gFrbQAYCJq8z4NzYnGCbtaj-nXGBdsZurn2cuAz0HOtYyBhs~Tx8z96oOxxE29Y-7W2Ym6cI1jm1JcS4vHBxNIoHier0pH7hxMoe1il8lZrfBcJaKBs3z5pArRd4qRWq8NjfiEzrZNiHVLonas-l0isH7UWmQfeVlPq-o5iLlf4I5jKsmX2anPlgru~RVA5s6wwvnFR2KW8xge81SFwj-cFs3KTMHzYiKDQB81sKGp1QvXDS83eDg9U8RrumHMfM68fF2wUZGunbi5QY2me6qPCULSibFlw__"
              alt="iPhone"
              className="w-full max-w-xs lg:max-w-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
