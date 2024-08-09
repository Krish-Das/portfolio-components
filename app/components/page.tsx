import { Main } from "@/components/layout/mainwrapper";
import { ButtonDefault, ButtonSmall } from "./Buttons";

export default function ComponentPage() {
  return (
    <>
      <Main>
        <h2>Button</h2>

        <ButtonDefault />
        <ButtonSmall />
      </Main>
    </>
  );
}
