const mathHomework = {
    solveEquation(a, b, c) {
        const discriminant = b ** 2 - 4 * a * c;
        if (discriminant < 0) {
            return [];
        } else {
            const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
            return [x1, x2];
        }
    },
    getQuadraticFormula(a, b, c) {
        const discriminant = b ** 2 - 4 * a * c;
        if (discriminant < 0) {
            return [];
        } else {
            const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
            return [x1, x2];
        }
    },
    getLinearEquationSolution(a, b) {
        const x = -b / a;
        return [x];
    }
}
