export const useCurrency = (amount: number) => {
  const currency = computed(() => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "EUR",
    }).format(amount);
  });

  return { currency };
};
