import cloudinary from './cloudinary'

let cachedResults
let cachedCount: number = 0;

export default async function getResults() {
  // Fetch only the latest image to get an idea of the total count
  const latestImage = await cloudinary.v2.search
    .expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`)
    .sort_by('public_id', 'desc')
    .max_results(1)
    .execute()

  const currentCount = latestImage.total_count; // Assuming that the total_count gives the count of all images in the folder

  // If the counts don't match, fetch all images again
  if (cachedCount !== currentCount) {
    const fetchedResults = await cloudinary.v2.search
      .expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`)
      .sort_by('public_id', 'desc')
      .max_results(400)
      .execute()

    cachedResults = fetchedResults;
    cachedCount = currentCount;
  }

  return cachedResults;
}
