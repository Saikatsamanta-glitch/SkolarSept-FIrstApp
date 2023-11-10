import { data } from "../data"
export default function Home() {
  return (
    <div>
        <h1 className="text-4xl text-center mt-[30px]">Welcome to best fasion store online 🔥</h1>
        <h1 className="font-semibold text-2xl">Popular products </h1>
        <div className="card_container w-screen flex flex-wrap gap-6 justify-center mt-10">
                {
                        data.shoes.map(v=>{
                                return <div className="card h-[400px] w-[300px] bg-cyan-100 rounded-md border-2">
                                <img src={v.image} alt="" />
                                <h2> {v.name} </h2>
                                </div>
                        })
                }
                
        </div>
    </div>
  )
}

// Tailwind to our React project