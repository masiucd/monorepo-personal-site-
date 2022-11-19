function Footer() {
  return (
    <footer>
      <div className="max-w-3xl mx-auto py-5 grid justify-center">
        <small className="pb-2">
          © Copyright Marcell Ciszek Druzysnki. All rights reserved.{" "}
          {new Date().getFullYear()}
        </small>
        <ul className="flex gap-3 justify-center">
          <li>Twitter</li>
          <li>Github</li>
          <li>Instagram</li>
        </ul>
      </div>
    </footer>
  )
}
export default Footer
