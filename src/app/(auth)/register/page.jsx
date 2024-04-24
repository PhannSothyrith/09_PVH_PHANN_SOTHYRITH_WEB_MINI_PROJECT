import { registerService } from "@/app/service/auth.service";
import { redirect } from "next/navigation";
import Image from "next/image";
const RegisterPage = () => {
    async function handleRegister(userInfo){
      'use server'
    const newUserInfo = {
      firstname:userInfo.get("firstname"),
      lastname: userInfo.get("lastname"),
      email: userInfo.get("email"),
      gender:userInfo.get("gender"),
      password: userInfo.get("password"),
    };
   const res = await registerService(newUserInfo)
   if(res.status === 200){
    redirect("/login")
   }
   console.log("register",res.status)
  }

  return (
    <main className="h-screen grid place-items-center ">
      <section className="w-[70%] mx-auto">
        <form action={handleRegister}>
          <div>
            <Image src={"/assets/icons/logo.svg"} width={250} height={200} />
          </div>

          <div className="grid grid-cols-3 gap-5 mt-16 ">
            <div>
              <div className="relative z-0 w-full mb-5 group">
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-400"
                >
                  First Name :
                </label>
                <input
                  type="firstname"
                  id="firstname"
                  name="firstname"
                  className="bg-[#EEEEEE] text-gray-900  text-sm rounded-lg  w-full p-2.5 "
                  placeholder="Enter your name..."
                  required
                />
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-400"
                >
                  Email :
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="bg-[#EEEEEE] border-none  text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="info@xyz.com"
                  required
                />
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-400"
                >
                  Password :
                </label>
                <input
                  type="password"
                  name="password"
                  id="floating_password"
                  className="bg-[#EEEEEE] border-none text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="xxxxxxxxxx"
                  required
                />
              </div>
              <button
                type="submit"
                className="text-white bg-[#306BFF] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Sign Up
              </button>
            </div>

            <div>
              <div className="relative z-0 w-full mb-5 group">
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-400"
                >
                  Last Name :
                </label>
                <input
                  type="lastname"
                  id="lastname"
                  name="lastname"
                  className="bg-[#EEEEEE]  text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your name..."
                  required
                />
              </div>

              <div className="relative z-0 w-full mb-5 group">
                <label
                  for="countries"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Gender :
                </label>
                <select
                  type="gender "
                  id="gender"
                  name="gender"
                  class="bg-[#EEEEEE]  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option>Choose your gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>

              <div className="relative z-0 w-full mb-5 group">
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-400"
                >
                  Confirm Password :
                </label>
                <input
                  type="password"
                  name="confirmpassword"
                  id="floating_password"
                  className="bg-[#EEEEEE]  text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="xxxxxxxxxx"
                  required
                />
              </div>
            </div>
            <div className="ml-8">
              <Image
                src={"/assets/icons/sign-up.svg"}
                width={400}
                height={1000}
                className="p-0.5"
              />
            </div>
          </div>
        </form>

        {/* <div>
          <form className="max-w-md mx-auto">
            <div className="mb-5 mt-20">
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-400"
                  >
                    First Name :
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="bg-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your name..."
                    required
                  />
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-400"
                  >
                    Last Name :
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="bg-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your name..."
                    required
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-400"
                  >
                    Email :
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="bg-gray-200  text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="info@xyz.com"
                    required
                  />
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-400"
                  >
                    Mobile No. :
                  </label>
                  <input
                    type="tel"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    name="floating_phone"
                    id="floating_phone"
                    className="bg-gray-5 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="+91 - 98596 58000"
                    required
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-400"
                  >
                    Password :
                  </label>
                  <input
                    type="password"
                    name="floating_password"
                    id="floating_password"
                    className="bg-gray-200  text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="xxxxxxxxxx"
                    required
                  />
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-400"
                  >
                    Confirm Password :
                  </label>
                  <input
                    type="password"
                    name="floating_password"
                    id="floating_password"
                    className="bg-gray-200  text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="xxxxxxxxxx"
                    required
                  />
                </div>
              </div>
            </div>
            <button
              type="signup"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Sign Up
            </button>
          </form>
        </div>
        <div className="ml-8">
          <Image
            src={"/assets/icons/sign-up.svg"}
            width={400}
            height={1000}
            className="p-0.5"
          />
        </div> */}
      </section>
    </main>
  );
};

export default RegisterPage;
