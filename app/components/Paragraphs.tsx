import { cn } from "@/lib/utils";

const ParagraphDefault = () => {
  return (
    <>
      <Paragraph />
      <br />

      <Paragraph preferReadability />
      <br />
    </>
  );
};

const Paragraph = ({
  limitWidt,
  preferReadability,
}: {
  limitWidt?: boolean;
  preferReadability?: boolean;
}) => {
  return (
    <>
      <p
        className={cn(
          "tracking-[0.02em]",
          limitWidt && "max-w-[50ch]",
          preferReadability && "max-w-[50ch]",
        )}
      >
        A cutting-edge real-time collaboration app designed to supercharge
        productivity.{"\n"}In publishing and graphic design, Lorem ipsum is a
        placeholder text commonly used to demonstrate the visual form of a
        document or a typeface without relying on meaningful content. Lorem
        ipsum may be used as a placeholder before the final copy is available.
      </p>
    </>
  );
};

export { ParagraphDefault };
