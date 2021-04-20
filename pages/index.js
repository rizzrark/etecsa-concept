import Head from "next/head";
import { getSortedDocsData } from "@/lib/mdxContent";
// components
import Search from "@/components/Search";
import TopHeader from "@/components/TopHeader";
import Hero from "@/components/Hero";

export default function Home({ allDocsData }) {
  return (
    <>
      <Head>
        <title>ETECSA</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main>
        <Hero />
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
        mollitia, aspernatur, beatae molestias magnam fugit commodi quaerat
        distinctio maiores sequi deleniti quis autem neque! Reprehenderit
        aspernatur laborum autem minima quae! Amet molestias sit hic, est nemo
        nisi distinctio temporibus animi officiis ut quod veritatis laboriosam,
        saepe ad. Rem dignissimos quia error? Perferendis aliquam ipsa amet
        facilis a libero accusamus repellat! Porro debitis repellat, suscipit
        earum perspiciatis ratione rem saepe ipsa perferendis dolorem recusandae
        voluptas architecto beatae qui quia? Nisi sunt et beatae commodi. Sit ex
        libero illum quo ducimus quod! Dolor, est. Commodi possimus, accusamus
        ullam sapiente tempore voluptas quod id alias sint quas quaerat,
        inventore, odio ipsa itaque quidem omnis ducimus repellat perferendis.
        Cumque similique cupiditate quas voluptate obcaecati! Eligendi officia
        voluptatibus assumenda aspernatur, totam possimus illo culpa nam
        expedita fugit consequatur nisi rerum. Autem rerum voluptatum
        consequatur numquam, sapiente officia ducimus nemo optio quae alias
        architecto fugit ab. Voluptas mollitia eius possimus, obcaecati natus
        ipsum iusto. Ab explicabo voluptas laudantium. Rem rerum, asperiores ad
        dolores dicta ex culpa ullam similique magnam est alias cumque vitae
        nesciunt sequi tempora. Architecto rerum suscipit cupiditate corrupti
        hic ab doloremque necessitatibus eius aliquid deserunt laudantium et, ea
        vel sapiente numquam, sint tempora alias, culpa molestiae quae neque
        dolore! Sint tempora illum veniam. Odio, pariatur hic suscipit illo
        error a obcaecati fugit, aspernatur, quam quidem quos aut fuga! Minus ut
        distinctio animi quae qui cumque, excepturi aspernatur repellendus
        explicabo ad voluptas odit ducimus. Labore a, velit error culpa sit
        necessitatibus esse obcaecati, nisi rem vero fugiat. Dicta tempore
        facere vel debitis voluptas ipsum voluptatum quis. Adipisci ipsam dicta
        corporis earum explicabo aspernatur similique. Consequatur maiores
        dignissimos consectetur beatae eligendi amet nulla soluta minus
        inventore, temporibus facere unde voluptates, repudiandae deleniti vitae
        nam illum laboriosam autem architecto atque excepturi ad, reiciendis
        libero. Laborum, ullam! Voluptate quod, reprehenderit natus repellendus
        perspiciatis exercitationem asperiores maxime nesciunt, veniam qui sequi
        minima voluptatum in quisquam. Corrupti ipsa, architecto quae totam,
        rerum ea similique, tempora consectetur nemo aliquid assumenda! Ab
        nesciunt libero error alias pariatur ducimus voluptatem accusamus iusto
        ipsa quidem aliquam sunt ad aspernatur, aperiam quos vel minima dolor
        beatae perferendis rerum eligendi? Voluptatum vel aliquam dolor
        expedita! Reiciendis possimus vitae unde nobis sed, corrupti dicta quo
        mollitia nulla nostrum voluptatibus laudantium molestiae dolor
        blanditiis provident, reprehenderit quisquam suscipit deleniti vero
        commodi omnis rem nihil. Facilis, reiciendis rerum! Animi qui asperiores
        quisquam minima commodi debitis et error, ad quis pariatur minus
        voluptas temporibus cumque, laudantium doloribus tempora dignissimos
        neque. Sequi doloremque dolorem blanditiis consectetur officiis impedit
        cum consequatur? Quos blanditiis ab eligendi ullam expedita aspernatur
        numquam vel illo fugit maiores nesciunt eius ea accusamus adipisci enim
        eum, fuga, ut quaerat. Similique a enim, sequi vel ad earum. Quibusdam.
        Eaque odit ex harum voluptatibus. Consequuntur quia expedita minima nemo
        corporis suscipit nihil sapiente quas dicta, dolor quasi soluta alias
        labore dignissimos deserunt ad aliquid optio obcaecati explicabo, veniam
        et? Architecto, enim voluptates quos ex dicta maiores cupiditate
        voluptas nam accusamus ullam quo? Debitis ducimus suscipit sunt vero
        beatae! Sapiente iusto illum neque dicta nam, totam quasi hic
        reprehenderit assumenda. Placeat quasi perspiciatis reiciendis nisi
        harum quaerat soluta vitae, eveniet aut alias sit quam ex possimus
        repellat asperiores non omnis quod veniam distinctio repudiandae.
        Similique officia odit alias vero suscipit! Provident nobis consequatur
        tempore officiis reiciendis quo aspernatur atque illo sunt possimus
        nihil molestiae cumque sed, quisquam quibusdam beatae minima suscipit
        dolorum optio id placeat voluptatibus harum saepe. Sapiente, rem.
        Aliquam, eveniet error rerum sunt nihil voluptate, libero possimus
        laborum recusandae sint deleniti sapiente quidem doloribus officiis a
        ducimus est dolorem nesciunt itaque exercitationem suscipit. Dolor
        numquam distinctio inventore hic? Autem architecto, ut officiis eum
        dicta, dolor accusamus rem ex explicabo possimus, labore facilis itaque
        vel vitae unde. Cupiditate nulla iure quibusdam qui quasi id error ipsam
        necessitatibus consequatur animi! Distinctio consectetur iusto impedit
        qui fugit aut porro quam veniam dolorum, at tenetur nemo? Perferendis
        minus nihil itaque, sit cumque voluptates provident obcaecati repellat
        ipsum rem odio minima architecto sequi. Unde tempora, magnam fuga
        sapiente molestias voluptas hic, mollitia totam dolor itaque atque
        aperiam consequuntur. Perferendis facere dolores cum accusamus, eos
        similique molestiae cumque voluptatibus esse harum odio ab odit? Quia,
        magnam, officiis aut numquam cupiditate dolore dolor neque dicta, unde
        eveniet consectetur a nulla quibusdam totam! Provident, magni reiciendis
        ipsam ipsa ea nihil soluta, debitis quibusdam, adipisci iusto facere!
        Tenetur, amet atque commodi quasi aliquam accusamus eos suscipit nam ea
        laboriosam! Labore provident a consequuntur aliquid corporis distinctio
        quo ad sapiente. Voluptas fugit ducimus assumenda delectus eveniet nihil
        magnam! Blanditiis in quis nesciunt voluptas suscipit nobis unde
        recusandae nihil nulla ea soluta officiis, voluptate tempora sed esse,
        rerum nostrum accusamus! Aliquid atque, corporis officia quae ipsam
        consectetur soluta quidem. Debitis expedita culpa ea fugit quos, sed,
        doloribus accusamus, quas laudantium possimus facere. Cupiditate
        repellendus nostrum, in ab, facere maiores assumenda odio impedit
        dolorum eligendi repellat animi, ad sed ut? Magnam libero animi
        similique quam quisquam aut sapiente voluptatum! Inventore qui sequi
        pariatur nam unde? Doloribus autem eveniet nesciunt pariatur repellat
        facilis iure, dolorem distinctio similique nihil natus quis soluta!
        Explicabo vero assumenda ea et maiores officia minus harum id
        accusantium error amet autem quibusdam velit rerum non mollitia,
        tempora, nam suscipit magni fuga quaerat! Totam necessitatibus aliquam
        iste cumque? Laborum, animi aut! Numquam labore adipisci fugit
        voluptatem velit aliquam! Ratione eos velit quo blanditiis, suscipit
        consequuntur ea. Quidem architecto non assumenda sit veniam culpa
        excepturi aliquam earum voluptatibus sequi!
      </main>
    </>
  );
}

export async function getStaticProps() {
  const allDocsData = getSortedDocsData();
  return {
    props: {
      allDocsData,
    },
  };
}
