import { Main } from "@/components/layout/mainwrapper";
import { ButtonDefault, ButtonSmall } from "./Buttons";
import { ParagraphDefault } from "./Paragraphs";

export default function ComponentPage() {
  return (
    <>
      <Main>
        <div className="wrapper__paragraph py-4">
          <ParagraphDefault />
        </div>

        <div className="wrapper__button">
          <ButtonDefault />
          <ButtonSmall />
        </div>
      </Main>
    </>
  );
}
