import { books } from "../../_dummy/data"
import BackButton from "@/components/BackButton"
import Image from "next/image"
import { Button } from "@/components/ui/button"



const Page = ({ params }) => {
  const { id } = params
  const bookDetail = books.find((book) => book.id === id)

  return (
    <div className="p-4">
      <BackButton />
      <div className="flex flex-col md:flex-row gap-5 items-center max-w-2xl">
        <Image
          src={bookDetail ? bookDetail.colorUrl : "/images/placeholder.jpg"}
          alt={bookDetail ? bookDetail.title : "Book Cover"}
          width={300}
          height={300}
        />
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold">{bookDetail ? bookDetail.title : "Book Title"}</h1>
          <p className="text-gray-500">{bookDetail ? bookDetail.author : "Author"}</p>
          <p className="text-gray-500">{bookDetail ? bookDetail.genre : "Genre"}</p>
          <p className="text-gray-500">{bookDetail ? bookDetail.description : "Description"}</p>
          <Button>Edit</Button>
        </div>
      </div>
      <div className="mt-5">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold mb-3">Book Summary</h2>
            <p className="text-gray-500">{bookDetail ? bookDetail.summary : "Summary"}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-3">Video</h2>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/DXRNk59JAcc"
              title="Cinematic Book Trailer | Book Trailers"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

// Keep the generateMetadata function as is
export const generateMetadata = async ({ params }) => {
  const bookDetail = books.find((book) => book.id === params.id)
  return {
    title: bookDetail ? bookDetail.title : "Book Title",
    description: bookDetail ? bookDetail.description : "Book Description",
  }
}

export default Page

