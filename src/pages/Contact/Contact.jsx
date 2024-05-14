import Img from "../../../public/contact.png";

const Contact = () => {
  return (
    <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 min-h-[calc(100vh-280px)]">
      <div className="flex flex-col justify-between">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
            Let`s talk!
          </h2>
          <div className="dark:text-gray-600">
            Vivamus in nisl metus? Phasellus.
          </div>
        </div>
        <img src={Img} alt="" className="p-6 h-52 md:h-64" />
      </div>
      <form noValidate="" className="space-y-6 border-2 p-3 rounded-lg">
        <div>
          <label htmlFor="name" className="text-sm">
            Full name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Name"
            className="w-full p-3 rounded dark:bg-gray-100 border"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded dark:bg-gray-100 border"
          />
        </div>
        <div>
          <label htmlFor="message" className="text-sm">
            Message
          </label>
          <textarea
            id="message"
            rows="3"
            placeholder="Massage"
            className="w-full p-3 rounded dark:bg-gray-100 border"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full p-3 text-sm font-bold bg-red-500 text-white tracking-wide uppercase rounded dark:bg-violet-600 dark:text-gray-50"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
