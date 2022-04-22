describe("Tests for the bookingCost function", () => {
    it("should cost R135.00 if user has booked for 3 days without discount", () => {
        const data = {
            check_in_day: 'Monday',
            duration: 3,
            cat_name : 'Snowy'
        }
        assert.strictEqual(135.00, bookingCost(data));
    });

    it("should cost R101.25 if user has booked for 3 days with 25% discount on Wednesday", () => {
        const data = {
            check_in_day: 'Wednesday',
            duration: 3,
            cat_name : 'Snowy'
        }
        assert.strictEqual(101.25, bookingCost(data));
    });

    it("should cost R114.75 if user has booked for 3 days with 15% discount on Friday", () => {
        const data = {
            check_in_day: 'Friday',
            duration: 3,
            cat_name : 'Snowy'
        }
        assert.strictEqual(114.75, bookingCost(data));
    });
});