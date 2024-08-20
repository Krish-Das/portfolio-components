import { Main } from "@/components/layout/mainwrapper";
import { ButtonDefault, ButtonSmall } from "./Buttons";
import { ParagraphDefault } from "./Paragraphs";
import { RiArrowRightDownLine } from "react-icons/ri";
import { IoPlay } from "react-icons/io5";

export default function ComponentPage() {
  return (
    <>
      <Main>
        <div className="wrapper__paragraph py-4">
          <ParagraphDefault />
        </div>

        <div className="wrapper__button">
          <ButtonDefault>
            Default <RiArrowRightDownLine />
          </ButtonDefault>

          <ButtonSmall>
            Small <IoPlay size={10} />
          </ButtonSmall>
        </div>
      </Main>
    </>
  );
}
