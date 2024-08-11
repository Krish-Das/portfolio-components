import { Main } from "@/components/layout/mainwrapper";
// import { Button } from "./RacButton";
import { Dialog } from "./DeleteDialog";

export default function ComponentPage() {
  return (
    <>
      <Main>
        <div className="wrapper__button">
          {/* <Button /> */}
          <Dialog />
        </div>
      </Main>
    </>
  );
}
