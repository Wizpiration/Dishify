const save = [
 {
  <div className="flex flex-col items-center">
        <p className="font-bold">Ayodele, David</p>
        <span className="flex ">
          <AiFillStar color="orange" />
          <AiFillStar color="orange" />
          <AiFillStar color="orange" />
          <AiFillStar color="orange" />
          <AiFillStar color="orange" />
        </span>
      </div>

      <div className="bg-primary p-2">
        <FaQuoteLeft color="#d2fca8" />
        <p className="p-4 px-6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis,
          adipisci debitis omnis ex rem architecto nemo aperiam iure laudantium
          facere cum. Odit ipsum soluta illo asperiores dicta labore quibusdam
          blanditiis, ipsa reiciendis. Officiis, modi. Itaque non quia quo optio
          enim aliquid facilis quas, accusamus nisi est, ea earum sit, cum
          officiis a rem expedita esse maxime inventore debitis eum? Sed enim
          iure quisquam, odit ipsam, nemo velit deserunt, doloribus distinctio
          reiciendis laboriosam? Tempora atque, aspernatur omnis accusamus
          itaque minima voluptatem delectus autem maiores libero quos error
          neque repellendus placeat eos illo quas quae deleniti labore facere
          cupiditate!
        </p>
        <span className="flex  items-center">
          <FaQuoteRight color="#d2fca8" />
        </span>
      </div>
 },
]

 <div className="flex justify-between mt-6">
      <div>
        <div className="rounded-lg border p-2 bg-[#FFF6D6]">
          <h1 className="font-bold">
            Cart <span>(3)</span>
          </h1>
          <p className="">Select all items</p>
        </div>

        <div className="flex border bg-white mt-8 justify-between rounded-lg p-3">
          <div className="flex gap-4  py-2">
            <img
              src={meal9}
              alt="food photo"
              className="rounded-lg h-[10rem]"
            />

            <div className=" flex flex-col justify-between">
              <section className="flex justify-between ">
                <h2 className="font-bold">Fried Rice and Chicken</h2>
                <h2 className="font-bold">$ 4.99</h2>
              </section>

              <section className="flex justify-between ">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                <h2>$ 4.99 X 1Iten</h2>
              </section>

              <section className="flex justify-between">
                <button className="text-sec flex items-center gap-2">
                  <RiDeleteBin3Line color="green" /> <span>Remove</span>
                </button>
                <div className="flex flex-col justify-between">
                  <div className="flex gap-2 items-center font-bold">
                    <button>-</button>
                    <button className="px-2 bg-[#FFF6D6] rounded-md">1</button>
                    <button>+</button>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex flex-col">
        <p className="flex rounded-lg font-bold gap-1 bg-sec py-3 px-2 my-1 justify-between">
          Summary <span> (2) Items</span>
        </p>
        <p className="flex rounded-lg bg-sec py-2 px-2 my-1 justify-between">
          Subtotal <span>$9.99</span>
        </p>
        <p className="flex rounded-lg bg-sec py-2 px-2 my-1 justify-between">
          Delivery Charges <span>$1</span>
        </p>
        <p className="flex rounded-lg bg-sec py-2 px-2 my-1 justify-between">
          TOTAL <span>$10.99</span>
        </p>
        <CustomButton>Order</CustomButton>
      </div> */}
    </div>


absolute top-12 bottom-3