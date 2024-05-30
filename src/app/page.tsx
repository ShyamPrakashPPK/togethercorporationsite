'use client'
import { useRef, useEffect } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import arrow from "../../public/icons/download.svg";
import hero from "../../public/images/hero.jpg";
import hero2 from "../../public/images/hero2.jpg";

import togetheredicon from "../../public/icons/download (1).svg";
import threadsicon from "../../public/icons/download (2).svg";
import tourismicon from "../../public/icons/download (3).svg";
import Footbar from "@/components/Footbar/Footer";
import Link from "next/link";

export default function Home() {
  const imageRef = useRef<HTMLDivElement | null>(null);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([null, null, null, null]); // Initialize with null values

  useEffect(() => {
    // Handle background scroll effect
    const handleScroll = () => {
      if (imageRef.current) {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        imageRef.current.style.backgroundPositionX = `${scrollTop * 0.3}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleRef = (index: number): React.RefCallback<HTMLDivElement> => (el) => {
    if (el) {
      sectionRefs.current[index] = el;
    }
  };

  useEffect(() => {
    // Add initial load animation to hero section
    if (heroRef.current) {
      heroRef.current.classList.add("reveal");
    }

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      sectionRefs.current.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <main>
      <div className="relative">
        <div className="z-20 relative">
          <Navbar />
        </div>
        <div
          ref={imageRef}
          className="select-none max-lg:hidden flex-grow flex absolute inset-0 bg-gradient from-gray-500 to-black opacity-25 image-transition w-full h-full"
          style={{
            backgroundImage: `url(${hero.src})`,
            backgroundSize: '130%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right bottom',
            zIndex: 0,
          }}
        ></div>
        <div ref={heroRef} className="z-10  relative max-w-7xl px-[20px] lg:px-[15vh] mt-[10vh]">
          <div className="text-4xl md:text-6xl">
            &quot;Empowering Minds, Transforming Style, and Enriching Journeys: Together, we create a brighter future.&quot;
          </div>
          <div className="text-2xl md:text-3xl pt-10">
            The destination for leaders who seek to change the world
          </div>

          
          <div className="my-10 py-3 px-7 bg-white text-black max-w-36">
              <Link href="https://calendly.com/togetheredtech" legacyBehavior>
                <a target="_blank">
                  <div >Get started</div>
                </a>
              </Link>
          </div>
        </div>
        <div className="z-10 relative grid grid-cols-1  lg:grid-cols-2">
          <div className="border-r  border-gray-300 px-[10vh] max-lg:hidden flex-grow flex">
            <Image
              src={arrow}
              className=""
              alt=""
              width={100}
              height={100}
            />
          </div>
          <div className="pl-[10%] md:pl-[10vh] py-[15vh]">
            <div>Subscribe to our Mailing list</div>
            <div className="py-1">Enter your email here</div>
            <div className="flex">
              <input type="text" className="border bg-transparent px-5 py-3" placeholder="Email Address" />
              <button className="py-3 px-7 bg-white text-black border border-gray-300">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white grid grid-cols-1 lg:grid-cols-2 text-black">
        <div ref={handleRef(0)} className="border-r border-b p-10 md:p-32">
          <div className="text-6xl">Company Overview</div>
          <div className="text-xl">We are a global conglomerate headquartered in Washington, DC, with a dynamic presence across diverse business verticals.</div>
        </div>
        <div ref={handleRef(1)} className="border-r border-b p-10 md:p-32">
          <Image
            className="pr-6 pb-6"
            src={tourismicon}
            alt=""
            width={100}
            height={100}
          />
          <div className="text-3xl">Together Tourism</div>
          <div className="text-xl">We pioneer educational journeys, blending learning with exploration, fostering curiosity, and opening new horizons.</div>
        </div>
        <div ref={handleRef(2)} className="border-r border-b p-10 md:p-32">
          <Image
            className="pr-6 pb-6"
            src={threadsicon}
            alt=""
            width={100}
            height={100}
          />
          <div className="text-3xl">Together Threads</div>
          <div className="text-xl">Leading the fashion industry, we import, export, and redefine global fashion trends, prioritizing sustainability and innovation</div>
        </div>
        <div ref={handleRef(3)} className="p-10 md:p-32">
          <Image
            className="pr-6 pb-6"
            src={togetheredicon}
            alt=""
            width={100}
            height={100}
          />
          <div className="text-3xl">TogetherEd</div>
          <div className="text-xl">Bridging academia and industry, we provide innovative solutions by harnessing academic expertise and solving complex industrial challenges through technology.</div>
        </div>
      </div>

      <div className="relative h-[100vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-gradient from-gray-500 to-black opacity-25"
          style={{
            backgroundImage: `url(${hero2.src})`,
            backgroundAttachment: 'fixed',
          }}
        ></div>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2  h-full text-white dark:text-white p-10 md:py-40 lg:py-[10%] lg:p-[10vh]">
          <div ref={handleRef(4)} className="flex flex-col lg:mt-5">
            <h2 className="text-2xl md:text-6xl font-semibold pb-6">Our Story</h2>
            <h4 className="text-2xl">We aim to empower the young to change the world</h4>
          </div>
          <div ref={handleRef(5)} className="md:text-lg lg:text-xl">
            <div className="h-px my-5 bg-gray-600 border-0 dark:bg-gray-700"></div>
            From India&apos;s vibrant embrace, Together Corporation emerged, weaving a narrative of learning, resilience, and growth.
            Our voyage began in 2009 with Together Tourism, blending education with exploration, sparking curiosity worldwide. Amidst success, the COVID-19 storm struck, testing our mettle. But adversity became our catalyst for innovation, fortifying our spirit.
            Expanding our horizons, TogetherEd united academia and industry, empowering minds with technology during uncertain times. This resilience led us to Together Threads, where sustainable style flourished, adapting to a changing world.
            In a stride toward new frontiers, Together Corporation now embraces the United States. Our journey isn&apos;t just about triumphs; it&apos;s about fortitude and the human spirit&apos;s resilience.
            Join us in this journey of revival and unwavering aspiration. Together, let&apos;s script a future where resilience defines success, and our shared experiences shape a world of endless possibilities.
          </div>
        </div>
      </div>

      <div>
        <Footbar />
      </div>
    </main>
  );
}
