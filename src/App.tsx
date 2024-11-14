import { Card } from "./components/Card";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export default function App() {
  return (
    <div>
      <Header header={"Header"} />
      <Card
        title={"Titulo do card 1"}
        subtitle={"Subtitulo do card 1"}
        content={"Conteúdo do card 1"}
        rodape={"Rodapé do card 1"}
      />
      <Card
        title={"Titulo do card 2"}
        subtitle={"Subtitulo do card 2"}
        content={"Conteúdo do card 2"}
        rodape={"Rodapé do card 2"}
      />

      <Footer footer={"Footer"} />
    </div>
  );
}
