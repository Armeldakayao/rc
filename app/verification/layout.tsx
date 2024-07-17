
import AuthBgSvg from "../../components/ui/auth-bg-svg";
export default function VerificationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" bg-gray-200">
      <div className="flex justify-between">
        <div></div>
        <div className="p-4">
          {" "}
          <AuthBgSvg />
        </div>
      </div>
      <div className="h-screen  bg-primary-brand-25">
        {children}
      </div>
    </div>
  );
}
