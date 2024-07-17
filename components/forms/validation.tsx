"use client";
import React, { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";

interface CountryCode {
  code: string;
  name: string;
}

const countryCodes: CountryCode[] = [
  { code: "1", name: "+1 (United States)" },
  { code: "33", name: "+33 (France)" },
];

const CustomForm: React.FC = () => {
  const [selectedCode, setSelectedCode] = useState<string>("1");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isNumberValid, setIsNumberValid] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    setIsNumberValid(validatePhoneNumber(selectedCode, phoneNumber));
  }, [selectedCode, phoneNumber]);

  const handleCodeChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedCode(e.target.value);
      setPhoneNumber(""); // Reset phone number on code change
    },
    []
  );

  const handleNumberChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const number = e.target.value;
      setPhoneNumber(number);
    },
    []
  );

  const handleCheckboxChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setIsChecked(e.target.checked);
    },
    []
  );

  const validatePhoneNumber = (code: string, number: string): boolean => {
    if (code === "1") {
      // Validation for US numbers
      return /^[2-9]\d{2}[2-9]\d{2}\d{4}$/.test(number);
    } else if (code === "33") {
      // Validation for French numbers
      return /^([1-9]\d{8})$/.test(number);
    }
    return false;
  };

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (isChecked && isNumberValid) {
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
          router.push("/verification");
          console.log("Form submitted successfully!");
        }, 3000);
      } else {
        console.log("Please fill in all fields correctly.");
      }
    },
    [isChecked, isNumberValid, router]
  );

  return (
    <form
      className="bg-white min-w-[500px] shadow-lg p-7 border-t rounded-lg"
      onSubmit={handleSubmit}
    >
      <p className="text-[#253F6F] font-bold mb-1  text-[18px]">
        We are happy to see you in our platform !
      </p>
      <p className="text-[#253F6F] font-bold  text-[18px] mb-7">
        Enter your phone number to complete the referral
      </p>
      <p className="text-[#1D3055] font-[500] mb-3">
        Please confirm your phone number
      </p>
      <div className="flex items-center gap-1">
        <select
          id="countryCode"
          value={selectedCode}
          onChange={handleCodeChange}
          className="text-md text-[#253F6F] p-3 border bg-transparent focus:outline-none focus-visible:border-none focus-visible:outline-none w-[70px] rounded-lg focus-visible:ring-0"
        >
          {countryCodes.map((option) => (
            <option key={option.code} value={option.code}>
              +{option.code}
            </option>
          ))}
        </select>

        <input
          type="tel"
          id="phoneNumber"
          value={phoneNumber}
          onChange={handleNumberChange}
          placeholder="Phone Number"
          className={`text-[#253F6F] border-primary-neutral-300 focus-visible:ring-primary-brand-400 flex h-11 w-full rounded-md border-[1.5px] bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 ${
            !isNumberValid && phoneNumber.length > 0 ? "border-red-500" : ""
          }`}
        />
      </div>

      <div className="mt-7">
        <input
          type="checkbox"
          id="termsCheckbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="focus-visible:ring-primary-brand-600 peer-checked:bg-[#253F6F] data-[state=checked]:text-primary-base-white  h-4 w-4 shrink-0  border rounded-md border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50"
        />
        <label htmlFor="termsCheckbox" className="text-[#253F6F] ml-3 mb-4">
          I agree to receive sms related to this referral
        </label>
      </div>

      <div>
        <button
          className={`mt-7 flex justify-center items-center ${
            isLoading ? "bg-blue-300" : "bg-[#4472CA]"
          } ${
            isChecked && phoneNumber.length > 0 && isNumberValid
              ? "bg-[#4472CA]"
              : "bg-blue-300"
          } p-3 w-full rounded-lg`}
          type="submit"
          disabled={!isChecked || phoneNumber.length === 0 || !isNumberValid}
        >
          {isLoading && (
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          )}
          <p>Send</p>
        </button>
      </div>
    </form>
  );
};

export default CustomForm;
