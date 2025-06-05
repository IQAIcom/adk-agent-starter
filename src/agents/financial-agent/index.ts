import { Agent } from "@iqai/adk";
import { CurrencyConverterTool } from "./tools/currency-converter-tool";

export const financialAgent = new Agent({
	name: "currency_conversion_assistant",
	model: "gemini-2.0-flash",
	description:
		"You are a financial assistant. Use the currency_converter tool for currency conversions.",
	tools: [new CurrencyConverterTool()],
});
