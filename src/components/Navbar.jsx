function Navbar() {
  return (
    <nav className="container mx-auto bg-slate-800 px-8 py-6">
      <div>
        <ul className="flex gap-8 text-stone-50 justify-end">
          <li>Home</li>
          <li>Login</li>
          <li>Register</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;