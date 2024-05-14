const Subscribe = () => {
  return (
    <div className="mt-10 bg-green-500 p-20 text-white">
      <h2 className="text-4xl font-bold text-center mb-6">
        Subscribe Our Newsletter!
      </h2>
      <p className="text-center w-[60%] mx-auto mb-6">
        Join our community of like-minded individuals and stay ahead of the
        curve. Subscribe now to receive your weekly newsletter dose of tech
        insights straight to your inbox. Let`s embark on this exciting journey
        together!
      </p>
      <div className="text-center mx-auto lg:px-60">
        <label className="input input-bordered flex flex-col md:flex-row lg:flex-row items-center gap-2">
          <input type="text" className="grow" placeholder="Enter Your Email" />
          <span className="badge badge-info uppercase px-3 py-1">
            Subscribe
          </span>
        </label>
      </div>
    </div>
  );
};

export default Subscribe;
