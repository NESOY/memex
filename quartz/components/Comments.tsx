import script from "./scripts/giscus.inline"
import style from "./styles/comments.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default ((opts?: Options) => {
  const Comments: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    return (
      
      <footer class={`${displayClass ?? "comments"}`}>
        <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
          <ins class="adsbygoogle"
          style="display:block"
          data-ad-client="ca-pub-1829817529831781"
          data-ad-slot="7543380157"
          data-ad-format="auto"
          data-full-width-responsive="false"
          ></ins>
          
        <script>
          (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
        <hr />
        <div class="giscus">
        </div>
      </footer>
    )
  }

  Comments.afterDOMLoaded = script
  Comments.css = style
  return Comments
}) satisfies QuartzComponentConstructor