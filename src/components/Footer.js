import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Information */}
          <div>
            <h4 className="font-bold text-lg mb-4">The Dubai Photographer</h4>
            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Navigation</h4>
            <ul>
              <li className="mb-2"><Link href="/" className="hover:underline">Home</Link></li>
              <li className="mb-2"><Link href="/about" className="hover:underline">About</Link></li>
              <li className="mb-2"><Link href="/services" className="hover:underline">Services</Link></li>
              <li className="mb-2"><Link href="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-bold text-lg mb-4">Follow Us</h4>
            <ul className="flex space-x-4">
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <svg className="w-6 h-6 fill-current text-white hover:text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.406.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24h-1.918c-1.504 0-1.794.715-1.794 1.762v2.31h3.588l-.467 3.622h-3.121V24h6.116c.732 0 1.325-.593 1.325-1.326V1.326C24 .593 23.407 0 22.675 0z"/>
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <svg className="w-6 h-6 fill-current text-white hover:text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.83.656-2.828.775 1.017-.611 1.798-1.577 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.719 0-4.924 2.205-4.924 4.922 0 .386.043.762.127 1.124-4.09-.205-7.72-2.165-10.148-5.144-.424.728-.666 1.575-.666 2.476 0 1.71.87 3.218 2.188 4.1-.807-.025-1.566-.248-2.228-.616v.062c0 2.388 1.698 4.379 3.95 4.83-.414.112-.85.172-1.296.172-.318 0-.626-.03-.928-.086.626 1.956 2.444 3.379 4.597 3.418-1.68 1.317-3.797 2.103-6.096 2.103-.396 0-.788-.023-1.176-.068 2.174 1.395 4.751 2.208 7.523 2.208 9.025 0 13.965-7.481 13.965-13.964 0-.213-.005-.425-.014-.636.961-.694 1.796-1.562 2.457-2.549z"/>
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg className="w-6 h-6 fill-current text-white hover:text-pink-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.333 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.333-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.333-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163C8.756 0 8.332.011 7.052.07 5.772.129 4.579.389 3.57 1.398 2.561 2.408 2.301 3.601 2.243 4.881 2.183 6.161 2.163 6.585 2.163 12s.02 5.839.07 7.119c.058 1.28.318 2.473 1.327 3.482.999.999 2.182 1.259 3.462 1.317 1.28.059 1.704.07 7.118.07s5.839-.011 7.119-.07c1.28-.058 2.473-.318 3.482-1.327.999-.999 1.259-2.182 1.317-3.462.059-1.28.07-1.704.07-7.118s-.011-5.839-.07-7.119c-.058-1.28-.318-2.473-1.327-3.482-.999-.999-2.182-1.259-3.462-1.317C15.585.011 15.161 0 12 0zm0 5.838c-3.406 0-6.162 2.755-6.162 6.162S8.594 18.162 12 18.162 18.162 15.406 18.162 12 15.406 5.838 12 5.838zm0 10.08c-2.162 0-3.918-1.756-3.918-3.918S9.838 8.082 12 8.082s3.918 1.756 3.918 3.918S14.162 15.918 12 15.918zm6.406-11.846c-.796 0-1.444.648-1.444 1.444s.648 1.444 1.444 1.444 1.444-.648 1.444-1.444-.648-1.444-1.444-1.444z"/>
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <svg className="w-6 h-6 fill-current text-white hover:text-blue-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.023-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667h-3.553v-11.501h-3.418v11.501h3.553v-5.694c0-1.373.026-3.137 1.91-3.137 1.913 0 2.2 1.494 2.2 3.042v5.789h3.553v.001zM2.3 8.451c-1.144 0-2.072-.929-2.072-2.072s.928-2.072 2.072-2.072c1.143 0 2.071.929 2.071 2.072s-.928 2.072-2.071 2.072zm1.772 12.001h-3.544v-11.501h3.544v11.501zM22.225 0h-20.451c-.976 0-1.774.799-1.774 1.774v20.451c0 .976.799 1.774 1.774 1.774h20.451c.976 0 1.774-.799 1.774-1.774v-20.451c0-.976-.799-1.774-1.774-1.774zm-1.774 22.225h-17.903v-17.903h17.903v17.903z"/>
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul>
              <li className="mb-2"><span>Phone: (971) 56-966-7552</span></li>
              <li className="mb-2"><span>Email: info@example.com</span></li>
              {/* <li className="mb-2"><span>Address: 123 Main St, City, Country</span></li> */}
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">&copy; 2024 Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
