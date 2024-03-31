import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import Hero from '../src/components/Hero';
import Social from '../src/components/Social';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      {/* <div class="container mx-auto px-4">
        <h1 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight py-8">Lorem ipsum dolor sit amet</h1>
        <div class="flex flex-row gap-4">
          <div class="lg:basis-1/4">
            <img class="object-cover w-full max-h-full" src="https://via.placeholder.com/150" alt="placeholder" />
            <div class="p-4">
              <h1 class="font-bold text-lg mb-4 mt-5">Lorem ipsum dolor sit amet</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              <button class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Button</button>
            </div>
          </div>
          <div class="lg:basis-1/4">
            <img class="object-cover w-full max-h-full" src="https://via.placeholder.com/150" alt="placeholder" />
            <div class="p-4">
              <h1 class="font-bold text-lg mb-4 mt-5">Lorem ipsum dolor sit amet</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              <button class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Button</button>
            </div>
          </div>
          <div class="lg:basis-1/4">
            <img class="object-cover w-full max-h-full" src="https://via.placeholder.com/150" alt="placeholder" />
            <div class="p-4">
              <h1 class="font-bold text-lg mb-4 mt-5">Lorem ipsum dolor sit amet</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              <button class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Button</button>
            </div>
          </div>
          <div class="lg:basis-1/4">
            <img class="object-cover w-full max-h-full" src="https://via.placeholder.com/150" alt="placeholder" />
            <div class="p-4">
              <h1 class="font-bold text-lg mb-4 mt-5">Lorem ipsum dolor sit amet</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              <button class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Button</button>
            </div>
          </div>
        </div>
      </div> */}
      <Social />
      <Footer />
    </div>
  );
}

export default App;
