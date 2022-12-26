import {useMediaQuery} from "lib"

import SocialLinks from "../common/social_links"

function Footer() {
  const matches = useMediaQuery("(min-width: 768px)")
  return (
    <footer>
      <div className="max-w-3xl mx-auto py-5 grid justify-center">
        <small className="pb-2">
          © Copyright{" "}
          <span className="text-blue-500">
            {" "}
            {matches ? "Marcell Ciszek Druzysnki" : "Marcell.CD"}
          </span>
          . All rights reserved. {new Date().getFullYear()}
        </small>
        <SocialLinks styles="justify-center" />
      </div>
    </footer>
  )
}
export default Footer
