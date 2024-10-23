import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { IconArrowLeft } from "@tabler/icons-react"

export default function BlogPost() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <Button variant="ghost" className="mb-8" onClick={() => window.history.back()}>
        <IconArrowLeft className="mr-2 h-4 w-4" />
        Return
      </Button>
      <article className="prose prose-stone dark:prose-invert">
        <h1 className="mb-4">The Art of Minimalism in Web Design</h1>
        <p className="text-lg mb-6">
          Minimalism in web design is more than just a trend; it&apos;s a powerful approach that focuses on simplicity,
          clarity, and functionality. By stripping away unnecessary elements and focusing on what truly matters,
          minimalist design can create stunning and effective websites that leave a lasting impression on users.
        </p>
        <img
          src="/placeholder.svg?height=400&width=800"
          alt="Minimalist web design example"
          className="w-full h-auto rounded-lg mb-6"
        />
        <h2 className="text-2xl font-semibold mb-4">The Benefits of Minimalist Design</h2>
        <p className="mb-6">
          Minimalist design offers several advantages:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>Improved user experience and navigation</li>
          <li>Faster loading times</li>
          <li>Clearer communication of key messages</li>
          <li>Timeless aesthetic that ages well</li>
          <li>Increased focus on important content and calls-to-action</li>
        </ul>
        <p className="mb-6">
          By embracing minimalism, designers can create websites that not only look beautiful but also perform
          exceptionally well, providing users with a seamless and enjoyable browsing experience.
        </p>
        <div className="border-l-4 border-gray-200 pl-4 italic mb-6">
          &quot;Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.&quot;
          - Antoine de Saint-Exupéry
        </div>
        <p>
          As we continue to navigate the ever-evolving landscape of web design, the principles of minimalism remain
          a powerful tool in creating impactful and user-friendly websites. By focusing on simplicity and
          purposeful design choices, we can craft digital experiences that truly resonate with users and stand the
          test of time.
        </p>
      </article>
    </div>
  )
}