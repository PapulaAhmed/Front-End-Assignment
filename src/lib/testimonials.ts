// Type definitions
interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

interface Testimonial {
  id: number;
  title: string;
  text: string;
  name: string;
}

export async function fetchTestimonials(): Promise<Testimonial[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    headers: { Accept: "application/json" },
    next: { revalidate: 3600 }, // ISR every 1 hour
  });

  if (!res.ok) throw new Error(`Failed: ${res.status}`);

  const posts: Post[] = await res.json();

  // ✅ Your map transformation stays here
  return posts.slice(0, 12).map((post) => ({
    id: post.id,
    title: post.title,
    text: post.body,
    name: `User ${post.userId}`,
  }));
}