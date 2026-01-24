export default defineProblemScript({
    isGenerator: true,
})(({ random }) => {
    const a = random.integer(-1000, 1000);
    const b = random.integer(-1000, 1000);

    const nonZeroA = a === 0 ? 5 : a;
    const nonZeroB = b === 0 ? 7 : b;

    let firstFactor, firstEquation;
    if (nonZeroA > 0) {
        firstFactor = `(x-${nonZeroA})`;
        firstEquation = `x - ${nonZeroA} = 0`;
    } else {
        firstFactor = `(x+${-nonZeroA})`;
        firstEquation = `x + ${-nonZeroA} = 0`;
    }

    let secondFactor, secondEquation;
    if (nonZeroB > 0) {
        secondFactor = `(x+${nonZeroB})`;
        secondEquation = `x + ${nonZeroB} = 0`;
    } else {
        secondFactor = `(x-${-nonZeroB})`;
        secondEquation = `x - ${-nonZeroB} = 0`;
    }

    const solution1 = nonZeroA;
    const solution2 = -nonZeroB;

    return {
        problemContent: (
            <>
                <ProblemDescription>
                    <P>Решите уравнение:</P>
                    <BlockMath>{math`
                        ${firstFactor}${secondFactor} = 0
                    `}</BlockMath>
                </ProblemDescription>
                <ProblemCheck label="Корни уравнения" hint="Через запятую" set={[solution1, solution2]} />
                <ProblemAnswer>
                    <M>{solution1}</M> и <M>{solution2}</M>
                </ProblemAnswer>
                <ProblemSolution>
                    <P>
                        Уравнение можно разбить на два под-уравнения, цель каждого из которых -- сделать соответствующую
                        скобку равной нулю:
                    </P>
                    <BlockMath>{math`
                        \def\arraystretch{1.5}
                        \begin{array}{cc}
                            \text{\small Под-уравнение 1} & \text{\small Под-уравнение 2} \\
                            ${firstFactor} = 0 & ${secondFactor} = 0 \\
                            ${firstEquation} & ${secondEquation} \\
                            \boxed{x = ${solution1}} & \boxed{x = ${solution2}}
                        \end{array}
                    `}</BlockMath>
                    <P>
                        Получили два решения уравнения: <M>{solution1}</M> и <M>{solution2}</M>
                    </P>
                </ProblemSolution>
            </>
        ),
    };
});
