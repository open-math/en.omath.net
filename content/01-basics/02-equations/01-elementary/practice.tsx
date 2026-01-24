import { QED } from '#project/utils/qed';

// #region Media
//

import firstPrintedEquation from './assets/first-printed-equation.png';
import axe from './assets/practice/axe.svg';
import axeAnswers2014 from './assets/practice/axe-answers-2014.png';
import axeAnswers2025 from './assets/practice/axe-answers-2025.jpg';
import magicTriangle1 from './assets/practice/magic-triangle-1.svg';
import magicTriangle2 from './assets/practice/magic-triangle-2.svg';
import magicTriangle3 from './assets/practice/magic-triangle-3.svg';
import rootClasses from './assets/practice/root-classes.svg';

//
// #endregion

// #region Problem Scripts
//

import zeroFactors from './scripts/zero-factors';
import generalFormula from './scripts/general-formula';

//
// #endregion

// #region Deps
//

const equationSolution = $CONTENT.basics.equations.elementary.article.$equationSolution;
const sameActionRule = $CONTENT.basics.equations.elementary.article.$sameActionRule;
const alwaysGlobal = $CONTENT.basics.equations.elementary.article.$alwaysGlobal;
const firstEquation = $CONTENT.basics.equations.elementary.article.$firstEquation;
const equalityFalseTrue = $CONTENT.basics.equations.elementary.article.$equalityFalseTrue;

//
// #endregion

// #region Todos
//

/**
 * Хотя бы по 10 уравнений
 * В каждой категории (простые, средние, продвинутые) придумать хотя бы по 10 (лучше больше) уравнений.
 */

/**
 * Задачи на изоляцию переменной (в ОГЭ и ЕГЭ есть такие)
 */

/**
 * Уравнения без решений и с бесконечным количеством решений
 * Их можно поместить в уровни medium и hard.
 * Желательно штук 5-10 каждого типа.
 */

/**
 * Мерзляк 6 класс
 * У него есть неплохие текстовые задачи и задачи на смекалку.
 */

//
// #endregion

export default defineProse({
    uniques: {
        linearRoot: Problems,
        twister: Problem,
        zeroFactors: Problems,
        fractionsFlip: Problems,
        sameActionRuleFalse: Problem,
        linearRootClasses: Problem,
        magicTriangles: Problems,
    },
})(({ uniques }) => (
    <>
        <Important title="Это база!">
            Навык преобразования равенств и решения уравнений — основной вообще во всей математике и точных науках.
            Постарайтесь решить как можно больше задач. Вне зависимости, получилось или нет решить задачу, всегда
            открывайте решение и проверяйте правильность рассуждений.
        </Important>

        <Important title="Не спешите!">
            Если у вас нет опыта решения уравнений, не спешите сделать как можно больше за один раз. Разбейте решение
            задач этого практикума на несколько дней. День на задачи уровня "ликбез", день на "нормальный", день на
            "продвинутый". В начале нового дня перерешивайте те задачи, с которыми у вас возникли трудности в предыдущий
            раз.
        </Important>

        <Problems title="Простые уравнения" level="easy">
            <P>Решите уравнение:</P>

            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`x + 100 = 1`}</BlockMath>
                </ProblemDescription>
                <ProblemCheck answer={-99} />
                <ProblemAnswer>
                    <M>-99</M>
                </ProblemAnswer>
                <ProblemSolution>
                    <P>
                        Чтобы <M>x</M> осталось в одиночестве, нужно избавиться от сложения с <M>100</M>. Для этого по{' '}
                        <Dep to={sameActionRule}>правилу</Dep> одинакового действия вычтем <M>100</M> из обеих частей
                        уравнения. Тогда в левой части <M>+100</M> и <M>-100</M> взаимно уничтожатся (в сумме получается{' '}
                        <M>0</M>), и там останется только <M>x</M>:
                    </P>
                    <BlockMath>{math`
                        \brand{- 100} \ | \ x + 100 = 1 \ | \ \brand{- 100} \\
                        -\cancel{100} + x + \cancel{100} = 1 - 100 \\
                        \boxed{x = -99}
                    `}</BlockMath>
                </ProblemSolution>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`76 = 3 + x`}</BlockMath>
                </ProblemDescription>
                <ProblemCheck answer={73} />
                <ProblemAnswer>
                    <M>73</M>
                </ProblemAnswer>
                <ProblemSolution>
                    <P>
                        Чтобы <M>x</M> осталось в одиночестве, нужно избавиться от сложения с <M>3</M>. Для этого по{' '}
                        <Dep to={sameActionRule}>правилу</Dep> одинакового действия вычтем <M>3</M> из обеих частей
                        уравнения. Тогда в правой части <M>+3</M> и <M>-3</M> взаимно уничтожатся (в сумме получается{' '}
                        <M>0</M>), и там останется только <M>x</M>:
                    </P>
                    <BlockMath>{math`
                        \brand{- 3} \ | \ 76 = 3 + x \ | \ \brand{- 3} \\
                        76 - 3 = \cancel{3} + x + \cancel{3} \\
                        \boxed{73 = x}
                    `}</BlockMath>
                </ProblemSolution>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`-x = -666`}</BlockMath>
                </ProblemDescription>
                <ProblemCheck answer={666} />
                <ProblemAnswer>
                    <M>666</M>
                </ProblemAnswer>
                <ProblemSolution>
                    <P>
                        Чтобы <M>x</M> осталось в одиночестве, нужно избавиться от умножения на <M>-1</M>. Для этого по{' '}
                        <Dep to={sameActionRule}>правилу</Dep> одинакового действия умножим обе части уравнения на{' '}
                        <M>-1</M>. Тогда в левой части умножение <M>-1</M> на <M>-1</M> даст в итоге просто <M>1</M>:
                    </P>
                    <BlockMath>{math`
                        \brand{\cdot (-1)} \ | \ -x = -666 \ | \ \brand{\cdot (-1)} \\
                        (-1)\cdot(-1) \cdot x = (-1)\cdot(-1)\cdot 666 \\
                        \boxed{x = 666}
                    `}</BlockMath>
                </ProblemSolution>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`40 = 10 - x`}</BlockMath>
                </ProblemDescription>
                <ProblemCheck answer={-30} />
                <ProblemAnswer>
                    <M>-30</M>
                </ProblemAnswer>
                <ProblemSolution>
                    <P>
                        Сейчас <M>x</M> мешает остаться в одиночестве сложение с <M>10</M>. Чтобы избавиться от него, по{' '}
                        <Dep to={sameActionRule}>правилу</Dep> одинакового действия вычтем <M>10</M> из обеих частей
                        уравнения. Тогда в правой части <M>+10</M> и <M>-10</M> взаимно уничтожатся (в сумме получается{' '}
                        <M>0</M>), и там останется только <M>-x</M>:
                    </P>
                    <BlockMath>{math`
                        \brand{- 10} \ | \ 40 = 10 - x \ | \ \brand{- 10} \\
                        40 - 10 = \cancel{10} - x - \cancel{10} \\
                        30 = -x
                    `}</BlockMath>
                    <P>
                        Теперь <M>x</M> отрицательный, а мы хотим, чтобы он был положительным. Чтобы избавиться от
                        умножения на <M>-1</M>, по правилу одинакового действия умножим обе части уравнения на <M>-1</M>
                        . Тогда в правой части умножение <M>-1</M> на <M>-1</M> даст в итоге просто <M>1</M>:
                    </P>
                    <BlockMath>{math`
                        \brand{\cdot (-1)} \ | \ 30 = -x \ | \ \brand{\cdot (-1)} \\
                        (-1)\cdot 30 = (-1)\cdot(-1)\cdot x \\
                        \boxed{-30 = x}
                    `}</BlockMath>
                </ProblemSolution>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`8x = 80`}</BlockMath>
                </ProblemDescription>
                <ProblemCheck answer={10} />
                <ProblemAnswer>
                    <M>10</M>
                </ProblemAnswer>
                <ProblemSolution>
                    <P>
                        Чтобы <M>x</M> осталось в одиночестве, нужно избавиться от умножения на <M>8</M>. Для этого по{' '}
                        <Dep to={sameActionRule}>правилу</Dep> одинакового действия разделим обе части уравнения на{' '}
                        <M>8</M>. Тогда в левой части можно сократить <M>8</M> и <M>8</M> (<M>8 : 8 = 1</M>), и там
                        останется только <M>x</M>:
                    </P>
                    <BlockMath>{math`
                        \brand{\div 8} \ | \ 8x = 80 \ | \ \brand{\div 8} \\
                        \frac{\cancel{8}x}{\cancel{8}} = \frac{80}{8} \\
                        \boxed{x = 10}
                    `}</BlockMath>
                </ProblemSolution>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`100 = \frac{x}{20}`}</BlockMath>
                </ProblemDescription>
                <ProblemCheck answer={2000} />
                <ProblemAnswer>
                    <M>2000</M>
                </ProblemAnswer>
                <ProblemSolution>
                    <P>
                        Чтобы <M>x</M> осталось в одиночестве, нужно избавиться от деления на <M>20</M>. Для этого по{' '}
                        <Dep to={sameActionRule}>правилу</Dep> одинакового действия умножим обе части уравнения на{' '}
                        <M>20</M>. Тогда в правой части можно сократить <M>20</M> и <M>20</M> (<M>20 : 20 = 1</M>), и
                        там останется только <M>x</M>:
                    </P>
                    <BlockMath>{math`
                        \brand{\cdot 20} \ | \ 100 = \frac{x}{20} \ | \ \brand{\cdot 20} \\
                        100\cdot 20 = \frac{x\cdot \cancel{20}}{\cancel{20}} \\
                        \boxed{2000 = x}
                    `}</BlockMath>
                </ProblemSolution>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`x+3 = -9x`}</BlockMath>
                </ProblemDescription>
                <ProblemCheck answers={['-0.3', '-3/10']} />
                <ProblemAnswer>
                    <M>{math`-\frac{3}{10}`}</M>
                </ProblemAnswer>
                <ProblemSolution>
                    <ProblemSection title="Решение 1">
                        <P>
                            Сгруппируем <M>x</M> в одной части уравнения, например, в правой. Для этого по{' '}
                            <Dep to={sameActionRule}>правилу</Dep> одинакового действия вычтем <M>x</M> из обеих частей
                            уравнения. Тогда в левой части <M>+x</M> и <M>-x</M> взаимно уничтожатся (в сумме получается{' '}
                            <M>0</M>), и там останется только <M>3</M>:
                        </P>
                        <BlockMath>{math`
                            \brand{- x} \ | \ x + 3 = -9x \ | \ \brand{- x} \\
                            - \cancel{x} + \cancel{x} + 3 = -9x - x \\
                            3 = -10x
                        `}</BlockMath>
                        <P>
                            Теперь <M>x</M> мешает остаться одной в правой части умножение на <M>-10</M>. Чтобы
                            избавиться от него, по правилу одинакового действия разделим обе части уравнения на{' '}
                            <M>-10</M>. Тогда в правой части можно провести сокращение:
                        </P>
                        <BlockMath>{math`
                            \brand{\div -10} \ | \ 3 = -10x \ | \ \brand{\div -10} \\
                            \frac{3}{-10} = \frac{\cancel{-10}x}{\cancel{-10}} \\
                            \boxed{-\frac{3}{10} = x}
                        `}</BlockMath>
                    </ProblemSection>
                    <ProblemSection title="Решение 2">
                        <P>
                            Теперь сгруппируем <M>x</M> уже в левой части уравнения. Для этого по{' '}
                            <Dep to={sameActionRule}>правилу</Dep> одинакового действия прибавим <M>9x</M> к обеим
                            частям уравнения. Тогда в правой части <M>-9x</M> и <M>+9x</M> взаимно уничтожатся (в сумме
                            получается <M>0</M>):
                        </P>
                        <BlockMath>{math`
                            \brand{+ 9x} \ | \ x + 3 = -9x \ | \ \brand{+ 9x} \\
                            9x + x + 3 = -\cancel{9x} + \cancel{9x} \\
                            10x + 3 = 0
                        `}</BlockMath>
                        <P>
                            Теперь <M>x</M> мешает умножение на <M>10</M> и сложение с <M>3</M>. Сначала избавимся от
                            сложения с <M>3</M>. Для этого по правилу одинакового действия вычтем <M>3</M> из обеих
                            частей уравнения. Тогда в левой части <M>+3</M> и <M>-3</M> взаимно уничтожатся (в сумме
                            получается <M>0</M>), и там останется только <M>10x</M>:
                        </P>
                        <BlockMath>{math`
                            \brand{- 3} \ | \ 10x + 3 = 0 \ | \ \brand{- 3} \\
                            -\cancel{3} + 10x + \cancel{3} = 0 - 3 \\
                            10x = -3
                        `}</BlockMath>
                        <P>
                            Делим обе части уравнения на <M>10</M>. Тогда в левой части можно сократить <M>10</M> и{' '}
                            <M>10</M> (<M>10 : 10 = 1</M>), и там останется только <M>x</M>:
                        </P>
                        <BlockMath>{math`
                            \brand{\div 10} \ | \ 10x = -3 \ | \ \brand{\div 10} \\
                            \frac{\cancel{10}x}{\cancel{10}} = \frac{-3}{10} \\
                            \boxed{x = -\frac{3}{10}}
                        `}</BlockMath>
                    </ProblemSection>
                </ProblemSolution>
                <ProblemNote>
                    Показательный пример, что некоторые пути решения короче остальных. В данном случае группировка{' '}
                    <M>x</M> в правой части уравнения оказалась более коротким путём к решению.
                </ProblemNote>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`\frac{2}{7}x = 6\frac{2}{7}`}</BlockMath>
                </ProblemDescription>
                <ProblemCheck answer={22} />
                <ProblemHint>В правой части уравнения смешанную дробь превратите в неправильную.</ProblemHint>
                <ProblemAnswer>
                    <M>22</M>
                </ProblemAnswer>
                <ProblemSolution>
                    <P>
                        В правой части смешанная дробь. Работать с ними неудобно, поэтому сначала переведём её в
                        неправильную дробь.
                    </P>
                    <BlockMath>{math`\frac{2}{7}x = \frac{44}{7}`}</BlockMath>
                    <P>
                        Чтобы <M>x</M> осталось в одиночестве, нужно избавиться от умножения на <M>2</M> и деления на{' '}
                        <M>7</M>. Сначала избавимся от деления на <M>7</M>. Для этого по{' '}
                        <Dep to={sameActionRule}>правилу</Dep> одинакового действия умножим обе части уравнения на{' '}
                        <M>7</M>. Тогда в правой части <M>7</M> и <M>7</M> сократятся (и в правой тоже), и там останется
                        только <M>2x</M>:
                    </P>
                    <BlockMath>{math`
                        \brand{\cdot 7} \ | \ \frac{2}{7}x = \frac{44}{7} \ | \ \brand{\cdot 7} \\
                        \cancel{7} \cdot \frac{2}{\cancel{7}}x = \frac{44}{\cancel{7}} \cdot \cancel{7} \\
                        2x = 44
                    `}</BlockMath>
                    <P>
                        Теперь <M>x</M> мешает остаться в одиночестве лишь деление на <M>2</M>. Чтобы избавиться от
                        него, по правилу одинакового действия разделим обе части уравнения на <M>2</M>. Тогда в левой
                        части <M>2</M> и <M>2</M> сократятся, и там останется только <M>x</M>:
                    </P>
                    <BlockMath>{math`
                        \brand{\div 2} \ | \ 2x = 44 \ | \ \brand{\div 2} \\
                        \frac{\cancel{2}x}{\cancel{2}} = \frac{44}{2} \\
                        \boxed{x = 22}
                    `}</BlockMath>
                </ProblemSolution>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`2 + 3x = -7x - 5`}</BlockMath>
                </ProblemDescription>
                <ProblemCheck answers={['-0.7', '-7/10']} />
                <ProblemAnswer>
                    <M>{math`-\frac{7}{10}`}</M>
                </ProblemAnswer>
                <ProblemSolution>
                    <ProblemSection title="Решение 1">
                        <P>
                            Сгруппируем <M>x</M> в одной части уравнения, например, в правой. Для этого по{' '}
                            <Dep to={sameActionRule}>правилу</Dep> одинакового действия вычтем <M>3x</M> из обеих частей
                            уравнения. Тогда в левой части <M>+3x</M> и <M>-3x</M> взаимно уничтожатся (в сумме
                            получается <M>0</M>), и там останется только <M>2</M>:
                        </P>
                        <BlockMath>{math`
                            \brand{- 3x} \ | \ 2 + 3x = -7x - 5 \ | \ \brand{- 3x} \\
                            - \cancel{3x} + 2 + \cancel{3x} = -7x - 5 - 3x \\
                            2 = -10x - 5
                        `}</BlockMath>
                        <P>
                            Теперь <M>x</M> мешает остаться одной в правой части умножение на <M>-10</M> и сложение с{' '}
                            <M>-5</M>. Сначала избавимся от сложения с <M>-5</M>. Для этого по правилу одинакового
                            действия прибавим <M>5</M> к обеим частям уравнения. Тогда в левой части <M>+5</M> и{' '}
                            <M>-5</M> взаимно уничтожатся (в сумме получается <M>0</M>):
                        </P>
                        <BlockMath>{math`
                            \brand{+ 5} \ | \ 2 = -10x - 5 \ | \ \brand{+ 5} \\
                            2 + 5 = -10x - \cancel{5} + \cancel{5} \\
                            7 = -10x
                        `}</BlockMath>
                        <P>
                            Теперь <M>x</M> мешает остаться одной в правой части умножение на <M>-10</M>. Чтобы
                            избавиться от него, по правилу одинакового действия разделим обе части уравнения на{' '}
                            <M>-10</M>. Тогда в правой части можно провести сокращение:
                        </P>
                        <BlockMath>{math`
                            \brand{\div -10} \ | \ 7 = -10x \ | \ \brand{\div -10} \\
                            \frac{7}{-10} = \frac{\cancel{-10}x}{\cancel{-10}} \\
                            \boxed{-\frac{7}{10} = x}
                        `}</BlockMath>
                    </ProblemSection>
                    <ProblemSection title="Решение 2">
                        <P>
                            Теперь сгруппируем <M>x</M> в левой части уравнения. Для этого по{' '}
                            <Dep to={sameActionRule}>правилу</Dep> одинакового действия прибавим <M>7x</M>, чтобы в
                            правой части <M>-7x</M> и <M>+7x</M> взаимно уничтожились (в сумме получается <M>0</M>):
                        </P>
                        <BlockMath>{math`
                            \brand{+ 7x} \ | \ 2 + 3x = -7x - 5 \ | \ \brand{+ 7x} \\
                            7x + 2 + 3x = -\cancel{7x} - 5 + \cancel{7x} \\
                            2 + 10x = -5
                        `}</BlockMath>
                        <P>
                            Теперь <M>x</M> мешает остаться одной в левой части умножение на <M>10</M> и сложение с{' '}
                            <M>2</M>. Сначала избавимся от сложения с <M>2</M>. Для этого по правилу одинакового
                            действия вычтем <M>2</M> из обеих частей уравнения.
                        </P>
                        <BlockMath>{math`
                            \brand{- 2} \ | \ 2 + 10x = -5 \ | \ \brand{- 2} \\
                            -\cancel{2} + \cancel{2} + 10x = -5 - 2 \\
                            10x = -7
                        `}</BlockMath>
                        <P>
                            Наконец делим обе части уравнения на <M>10</M>. Тогда в левой части можно сократить{' '}
                            <M>10</M> и <M>10</M> (<M>10 : 10 = 1</M>), и там останется только <M>x</M>:
                        </P>
                        <BlockMath>{math`
                            \brand{\div 10} \ | \ 10x = -7 \ | \ \brand{\div 10} \\
                            \frac{\cancel{10}x}{\cancel{10}} = \frac{-7}{10} \\
                            \boxed{x = -\frac{7}{10}}
                        `}</BlockMath>
                    </ProblemSection>
                </ProblemSolution>
                <ProblemNote>
                    <P>
                        В данной задаче нет разницы, в какой части уравнения группировать <M>x</M>. Решения получились
                        одинаковыми по количеству преобразований.
                    </P>
                </ProblemNote>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`10(x+2) = -7`}</BlockMath>
                </ProblemDescription>
                <ProblemCheck answers={['-2.7', '-27/10']} />
                <ProblemAnswer>
                    <M>{math`-\frac{27}{10}`}</M>
                </ProblemAnswer>
                <ProblemSolution>
                    <P>Сначала раскроем скобки:</P>
                    <BlockMath>{math`10x + 20 = -7`}</BlockMath>
                    <P>
                        <M>x</M> мешает остаться в одиночестве умножение на <M>10</M> и сложение с <M>20</M>. Сначала
                        избавимся от сложения с <M>20</M>. Для этого по <Dep to={sameActionRule}>правилу</Dep>{' '}
                        одинакового действия вычтем <M>20</M> из обеих частей уравнения. Тогда в левой части <M>+20</M>{' '}
                        и <M>-20</M> взаимно уничтожатся (в сумме получается <M>0</M>), и там останется только{' '}
                        <M>10x</M>:
                    </P>
                    <BlockMath>{math`
                        \brand{- 20} \ | \ 10x + 20 = -7 \ | \ \brand{- 20} \\
                        - \cancel{20} + 10x + \cancel{20} = -7 - 20 \\
                        10x = -27
                    `}</BlockMath>
                    <P>
                        Теперь <M>x</M> мешает остаться в одиночестве умножение на <M>10</M>. Чтобы избавиться от него,
                        по правилу одинакового действия разделим обе части уравнения на <M>10</M>. Тогда в левой части
                        можно сократить <M>10</M> и <M>10</M> (<M>10 : 10 = 1</M>), и там останется только <M>x</M>:
                    </P>
                    <BlockMath>{math`
                        \brand{\div 10} \ | \ 10x = -27 \ | \ \brand{\div 10} \\
                        \frac{\cancel{10}x}{\cancel{10}} = \frac{-27}{10} \\
                        \boxed{x = -\frac{27}{10}}
                    `}</BlockMath>
                </ProblemSolution>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`8 -5(2x-3) = 13 - 6x`}</BlockMath>
                </ProblemDescription>
                <ProblemCheck answers={['2.5', '5/2']} />
                <ProblemAnswer>
                    <M>{math`\frac{5}{2}`}</M>
                </ProblemAnswer>
                <ProblemSolution>
                    <P>Для начала раскроем скобки и приведём подобные в левой части уравнения:</P>
                    <BlockMath>{math`
                        8 - 10x + 15 = 13 - 6x \\
                        -10x + 23 = 13 - 6x
                    `}</BlockMath>
                    <P>
                        Выберем, в какой части уравнения группировать <M>x</M>. Пусть это будет правая часть. Значит,
                        нужно чтобы в левой части <M>x</M> не осталось. Для этого по{' '}
                        <Dep to={sameActionRule}>правилу</Dep> одинакового действия прибавим <M>10x</M> к обеим частям
                        уравнения. Тогда в левой части <M>-10x</M> и <M>+10x</M> взаимно уничтожатся (в сумме получается{' '}
                        <M>0</M>), и там останется только число <M>23</M>:
                    </P>
                    <BlockMath>{math`
                        \brand{+ 10x} \ | \ -10x + 23 = 13 - 6x \ | \ \brand{+ 10x} \\
                        +\cancel{10x} - \cancel{10x} + 23 = 13 - 6x + \cancel{10x} \\
                        23 = 13 + 4x
                    `}</BlockMath>
                    <P>
                        Теперь <M>x</M> мешает остаться в одиночестве умножение на <M>4</M> и сложение с <M>13</M>.
                        Сначала избавимся от сложения с <M>13</M>. Для этого вычтем из обеих частей уравнения <M>13</M>.
                    </P>
                    <BlockMath>{math`
                        \brand{- 13} \ | \ 23 = 13 + 4x \ | \ \brand{- 13} \\
                        -13 + 23 = \cancel{13} + 4x - \cancel{13} \\
                        10 = 4x
                    `}</BlockMath>
                    <P>
                        Теперь <M>x</M> мешает остаться в одиночестве умножение на <M>4</M>. Чтобы избавиться от него,
                        по правилу одинакового действия разделим обе части уравнения на <M>4</M>. Тогда в правой части
                        можно сократить <M>4</M> и <M>4</M> (<M>4 : 4 = 1</M>), и там останется только <M>x</M>:
                    </P>
                    <BlockMath>{math`
                        \brand{\div 4} \ | \ 10 = 4x \ | \ \brand{\div 4} \\
                        \frac{10}{4} = \frac{\cancel{4}x}{\cancel{4}} \\
                        \boxed{\frac{5}{2} = x}
                    `}</BlockMath>
                </ProblemSolution>
            </SubProblem>
        </Problems>

        <Problem title="Первое печатное уравнение" level="easy">
            <ProblemDescription>
                <P>
                    Вам предоставляется честь решить <Dep to={firstEquation}>первое</Dep> печатное уравнение в истории!
                </P>

                <Image src={firstPrintedEquation} width="400px" invert="dark" />

                <P>В современной записи:</P>

                <BlockMath>{math`14x + 15 = 71`}</BlockMath>
            </ProblemDescription>
            <ProblemCheck answer={4} />
            <ProblemAnswer>
                <M>4</M>
            </ProblemAnswer>
            <ProblemSolution>
                <P>
                    Первое печатное уравнение в истории, несмотря на громкий титул, решается так же, как и все остальные
                    уравнения. В левой части неизвестной <M>x</M> мешает умножение на <M>14</M> и сложение с <M>15</M>.
                    Сначала избавимся от сложения с <M>15</M>. Для этого по <Dep to={sameActionRule}>правилу</Dep>{' '}
                    одинакового действия вычтем <M>15</M> из обеих частей уравнения. Тогда в левой части <M>+15</M> и{' '}
                    <M>-15</M> взаимно уничтожатся (в сумме получается <M>0</M>), и там остаётся только <M>14x</M>.
                </P>
                <BlockMath>{math`
                    14x + 15 = 71 \\
                    \brand{- 15} \ | \ 14x + 15 = 71 \ | \ \brand{- 15} \\
                    14x + \cancel{15} - \cancel{15} = 71 - 15 \\
                    14x = 56
                `}</BlockMath>
                <P>
                    Теперь делим обе части на <M>14</M>. Тогда в левой части можно сократить <M>14</M> и <M>14</M> (
                    <M>14 : 14 = 1</M>), и там останется только <M>x</M>:
                </P>
                <BlockMath>{math`
                    \brand{\div \ 14} \ | \ 14x = 56 \ | \ \brand{\div 14} \\
                    \frac{\cancel{14}x}{\cancel{14}} = \frac{56}{14} \\
                    \boxed{x = 4}
                `}</BlockMath>
                <P>
                    Итак, <M>4</M> -- единственное решение первого печатного уравнения в истории!
                </P>
            </ProblemSolution>
        </Problem>

        <Problem title="Топор войны" level="easy" pretty>
            <ProblemDescription>
                <P>
                    Топор весит килограмм и полтопора.
                    <Br />
                    Сколько весит топор?
                </P>
            </ProblemDescription>
            <ProblemCheck answer={2} />
            <ProblemAnswer>
                Топор весит <M>2</M> килограмма.
            </ProblemAnswer>
            <ProblemSolution>
                <ProblemSection title="Решение через весы">
                    <P>
                        Представьте себе механические весы в равновесии. Слева лежит целый топор, а справа половина
                        топора и гиря массой <M>1</M> килограмм.
                    </P>
                    <Image src={axe} width="600px" invert="dark" />
                    <P>
                        Получается, гиря массой <M>1</M> килограмм заменяет собой вторую, отсутствующую на весах,
                        половину топора. Значит и весит эта гиря столько же, сколько и эта половина топора. То есть и
                        гиря и половина топора имеют одинаковую массу -- <M>1</M> килограмм. А раз <M>1</M> килограмм
                        это масса половины топора, то масса всего топора вдвое больше -- <M>2</M> килограмма.
                    </P>
                </ProblemSection>
                <ProblemSection title="Решение через уравнение">
                    <P>
                        Обозначим массу топора за <M>x</M> килограмм. Тогда условие можно записать в виде уравнения:
                    </P>
                    <BlockMath>{math`x = 1 + \frac{x}{2}`}</BlockMath>
                    <P>
                        По <Dep to={sameActionRule}>правилу одинакового действия</Dep> вычтем из обеих частей уравнения{' '}
                        <M>{math`\frac{x}{2}`}</M>:
                    </P>
                    <BlockMath>{math`
                        \brand{- \frac{x}{2}} \ | \ x = 1 + \frac{x}{2} \ | \ \brand{- \frac{x}{2}} \\
                        x - \frac{x}{2} = 1 + \cancel{\frac{x}{2}} - \cancel{\frac{x}{2}} \\
                        \frac{x}{2} = 1
                    `}</BlockMath>
                    <P>
                        Теперь обе части уравнения умножим на <M>2</M>:
                    </P>
                    <BlockMath>{math`
                        \brand{\cdot 2} \ | \ \frac{x}{2} = 1 \ | \ \brand{\cdot 2} \\
                        \cancel{2}\cdot\frac{x}{\cancel{2}} = 1\cdot 2 \\
                        x = 2
                    `}</BlockMath>
                    <P>
                        Топор весит <M>2</M> килограмма.
                    </P>
                </ProblemSection>
            </ProblemSolution>
            <ProblemNote>
                <P>
                    Это классическая загадка, которая встречается в разных формах. Многие могли слышать её вариацию с
                    кирпичом, который весит килограмм и половину кирпича. Фишка этой задачи в том, что попытка решить её
                    в голове почти всегда приводит к забавным ошибкам или даже ступору. Ответы варьируются от <M>1</M>{' '}
                    килограмма до бесконечной массы. Очень часто фигурирует и ответ <M>1.5</M> килограмма, ну потому что
                    топор <M>1</M> а его половина <M>0.5</M>, значит <M>1 + 0.5 = 1.5</M>. А у кого-то задача даже
                    вызывает вспышки гнева, потому что "топор не может весить столько, сколько он весит"! Полюбуйтесь
                    сами:
                </P>

                <Gallery>
                    <Image src={axeAnswers2014} width="700px">
                        <Caption>В 2014 году</Caption>
                    </Image>
                    <Image src={axeAnswers2025} width="700px">
                        <Caption>В 2025 году</Caption>
                    </Image>
                </Gallery>
            </ProblemNote>
        </Problem>

        <Problem title="Он умножил на ноль..." level="easy">
            <ProblemDescription>
                <P>
                    Матвей решает уравнение <M>x + 3 = 5</M>. Ему было лень думать, и он решил сделать ход конём. Он
                    сказал, что решением уравнения является число <M>10</M>.
                </P>
                <P>
                    Для обоснования своего решения он подставил <M>10</M> вместо <M>x</M> в уравнение, а потом умножил
                    обе части уравнения на <M>0</M>:
                </P>
                <BlockMath>{math`
                    10 + 3 = 5 \\
                    \brand{\cdot 0} \ | \ 10 + 3 = 5 \ | \ \brand{\cdot 0} \\
                    (10 + 3) \cdot 0 = 5 \cdot 0 \\
                    0 = 0
                `}</BlockMath>
                <P>
                    Раз в итоге получилось истинное равенство, то <M>10</M> является решением уравнения <M>x + 3 = 5</M>
                    . Сегодня за Матвея думаете вы. Прав ли он? Если нет, конкретно объясните, что не так в его решении.
                </P>
            </ProblemDescription>
            <ProblemHint>По определению докажите, что его решение это не решение.</ProblemHint>
            <ProblemHint>Вспомните, зачем мы вообще преобразовываем уравнения.</ProblemHint>
            <ProblemSolution>
                <P>
                    Во-первых, число <M>10</M>, которое Матвей назвал, не является решением уравнения <M>x + 3 = 5</M>{' '}
                    чисто по определению. Потому что <Dep to={equationSolution}>по определению</Dep> решением или корнем
                    уравнения называется такое число, при подстановке которого вместо неизвестного в уравнении
                    превращает его в истинное равенство. Подставляем <M>10</M> вместо <M>x</M> и получаем ложное
                    равенство:
                </P>
                <BlockMath>{math`
                    10 + 3 = 5 \\
                    13 = 5
                `}</BlockMath>
                <P>
                    Во-вторых, при решении уравнения у нас нет цели преобразованиями получить истинное равенство. Мы
                    изначально предполагаем, что равенство истинно и начинаем его преобразованиями упрощать, пока не
                    станет понятно, чему равна неизвестная. Поэтому умножение на <M>0</M> абсолютно бесполезно, ведь оно
                    приводит к потере <M>x</M> из уравнения, а значит мы уже не сможем выяснить, чему он равен.
                </P>
            </ProblemSolution>
        </Problem>

        <Problem title="Некое число" level="easy">
            <ProblemDescription>
                <P>
                    Некое число умножили на <M>2</M>, прибавили <M>10</M> и получили <M>100</M>. Что это было за число?
                </P>
            </ProblemDescription>
            <ProblemCheck answer={45} />
            <ProblemHint>
                Обозначьте это число за <M>x</M> и математически запишите все произведённые над ним действия в виде
                уравнения.
            </ProblemHint>
            <ProblemAnswer>
                <M>45</M>
            </ProblemAnswer>
            <ProblemSolution>
                <P>
                    Обозначим это некое неизвестное число за <M>x</M>. Его умножили на <M>2</M>, то есть получаем{' '}
                    <M>2x</M>. Потом прибавили <M>10</M>, значит уже имеем <M>2x + 10</M>. И вот это всё равно{' '}
                    <M>100</M>. Получается уравнение:
                </P>
                <BlockMath>{math`2x + 10 = 100`}</BlockMath>
                <P>
                    Чтобы <M>x</M> осталось в одиночестве, надо избавиться от умножения на <M>2</M> и сложения с{' '}
                    <M>10</M>. Сначала избавимся от сложения с <M>10</M>. Для этого по{' '}
                    <Dep to={sameActionRule}>правилу</Dep> одинакового действия вычтем <M>10</M> из обеих частей
                    уравнения.
                </P>
                <BlockMath>{math`
                    \brand{- 10} \ | \ 2x + 10 = 100 \ | \ \brand{- 10} \\
                    -\cancel{10} + 2x + \cancel{10} = 100 - 10 \\
                    2x = 90
                `}</BlockMath>
                <P>
                    Теперь обе части уравнения делим на <M>2</M>. Тогда в левой части можно сократить <M>2</M> и{' '}
                    <M>2</M> (<M>2 : 2 = 1</M>), и там останется только <M>x</M>:
                </P>
                <BlockMath>{math`
                    \brand{\div 2} \ | \ 2x = 90 \ | \ \brand{\div 2} \\
                    \frac{\cancel{2}x}{\cancel{2}} = \frac{90}{2} \\
                    \boxed{x = 45}
                `}</BlockMath>
                <P>
                    Итак, изначальное число равно <M>45</M>.
                </P>
            </ProblemSolution>
        </Problem>

        <Problem title="Цена с подвохом" level="easy" pretty>
            <ProblemDescription>
                <P>
                    Бейсбольная бита и мяч вместе стоят <M>110</M> рублей. Бита стоит на <M>100</M> рублей больше, чем
                    мяч. Сколько стоит мяч?
                </P>
                <P>
                    Сначала попытайтесь быстро решить задачу устно. Затем решите её через уравнение и сравните
                    результаты.
                </P>
            </ProblemDescription>
            <ProblemCheck answer={5} />
            <ProblemHint>
                Обозначьте стоимость мяча за <M>x</M> рублей.
            </ProblemHint>
            <ProblemAnswer>
                Мяч стоит <M>5</M> рублей, бита <M>105</M> рублей.
            </ProblemAnswer>
            <ProblemSolution>
                <P>
                    Если пытаться решить задачу устно, то интуитивно хочется просто из общей стоимости <M>110</M>{' '}
                    вычесть <M>100</M> и получить, что мяч стоит <M>10</M> рублей. А теперь попробуем подумать. Если бы
                    мяч стоил <M>10</M> рублей, то бита стоила бы <M>10 + 100 = 110</M> рублей, а значит вместе они
                    стоили бы <M>10 + 110 = 120</M> рублей, что больше <M>110</M> рублей!
                </P>
                <P>
                    Просят найти стоимость мяча. Обозначим её за <M>x</M> рублей. Тогда стоимость биты будет{' '}
                    <M>x + 100</M> рублей. И вместе они стоят <M>110</M> рублей. Составляем уравнение:
                </P>
                <BlockMath>{math`x + (x + 100) = 110`}</BlockMath>
                <P>Приводим подобные в левой части уравнения:</P>
                <BlockMath>{math`2x + 100 = 110`}</BlockMath>
                <P>
                    Чтобы <M>x</M> осталось в одиночестве, нужно избавиться от умножения на <M>2</M> и сложения с{' '}
                    <M>100</M>. Сначала избавимся от сложения с <M>100</M>. Для этого по{' '}
                    <Dep to={sameActionRule}>правилу</Dep> одинакового действия вычтем <M>100</M> из обеих частей
                    уравнения.
                </P>
                <BlockMath>{math`
                    \brand{- 100} \ | \ 2x + 100 = 110 \ | \ \brand{- 100} \\
                    -\cancel{100} + 2x + \cancel{100} = 110 - 100 \\
                    2x = 10
                `}</BlockMath>
                <P>
                    Теперь обе части уравнения делим на <M>2</M>. Тогда в левой части можно сократить <M>2</M> и{' '}
                    <M>2</M> (<M>2 : 2 = 1</M>), и там останется только <M>x</M>:
                </P>
                <BlockMath>{math`
                    \brand{\div 2} \ | \ 2x = 10 \ | \ \brand{\div 2} \\
                    \frac{\cancel{2}x}{\cancel{2}} = \frac{10}{2} \\
                    \boxed{x = 5}
                `}</BlockMath>
                <P>
                    Итак, мяч стоит <M>5</M> рублей, а бита <M>5 + 100 = 105</M> рублей!
                </P>
            </ProblemSolution>
            <ProblemNote>
                <P>
                    Эта задача-ловушка хорошо демонстрирует два типа мышления: "быстрое/интуитивное", которое
                    затрачивает меньше энергии, и "медленное/логическое". Когда вы пытаетесь быстро решить эту задачу
                    устно, за дело берётся "быстрый" тип мышления, который из общей суммы <M>110</M> вычитает <M>100</M>{' '}
                    и получает, что мяч стоит <M>10</M> рублей. Он не проверяет результат, а просто выдаёт его.
                </P>
            </ProblemNote>
        </Problem>

        <Problem title="Бетономешалка мешает бетон" level="easy" applied>
            <ProblemDescription>
                <P>
                    Вы собираетесь построить свой дом! Для этого вам нужно много бетона. Бетон образуется при смешивании
                    цемента и песка в пропорции <M>1:3</M>, то есть на килограмм цемента нужно три килограмма песка.
                    Сколько цемента и песка вам нужно, если вы хотите замешать <M>100</M> кг бетона?
                </P>
            </ProblemDescription>
            <ProblemCheck answer={25} label="Цемента" />
            <ProblemCheck answer={75} label="Песка" />
            <ProblemHint>
                Обозначьте за <M>x</M> массу цемента. Тогда масса песка будет <M>3x</M>.
            </ProblemHint>
            <ProblemHint>
                Либо обозначьте за <M>x</M> массу песка. Тогда масса цемента будет <M>{math`\frac{x}{3}`}</M>.
            </ProblemHint>
            <ProblemAnswer>
                <M>25</M> килограммов цемента и <M>75</M> килограммов песка.
            </ProblemAnswer>
            <ProblemSolution>
                <ProblemSection title="Цемент за неизвестное">
                    <P>
                        Особой разницы, что именно мы обозначим за неизвестное, цемент или песок, нет. Пусть неизвестной
                        будет масса цемента, обозначим её за <M>x</M> килограмм. Тогда масса песка для замешивания
                        бетона должна быть в три раза больше, чем масса цемента, то есть <M>3x</M> килограмм. В сумме
                        должно получиться <M>100</M> кг бетона:
                    </P>
                    <BlockMath>{math`x + 3x = 100`}</BlockMath>
                    <P>Приводим подобные в левой части уравнения:</P>
                    <BlockMath>{math`4x = 100`}</BlockMath>
                    <P>
                        Чтобы <M>x</M> осталось в одиночестве, нужно избавиться от умножения на <M>4</M>. Для этого по{' '}
                        <Dep to={sameActionRule}>правилу</Dep> одинакового действия разделим обе части уравнения на{' '}
                        <M>4</M>. Тогда в левой части <M>4</M> и <M>4</M> сократятся, и там останется только <M>x</M>:
                    </P>
                    <BlockMath>{math`
                        \brand{\div 4} \ | \ 4x = 100 \ | \ \brand{\div 4} \\
                        \frac{\cancel{4}x}{\cancel{4}} = \frac{100}{4} \\
                        \boxed{x = 25}
                    `}</BlockMath>
                    <P>
                        Итак, для замешивания <M>100</M> килограммов бетона потребуется <M>25</M> килограммов цемента и{' '}
                        <M>3 \cdot 25 = 75</M> килограммов песка.
                    </P>
                </ProblemSection>
                <ProblemSection title="Песок за неизвестное">
                    <P>
                        Теперь обозначим за неизвестное массу песка, то есть <M>x</M> килограмм. Тогда масса цемента для
                        замешивания бетона должна быть в три раза меньше, чем масса песка, то есть{' '}
                        <M>{math`\frac{x}{3}`}</M> килограмм. В сумме должно получиться <M>100</M> кг бетона:
                    </P>
                    <BlockMath>{math`\frac{x}{3} + x = 100`}</BlockMath>
                    <P>
                        Слева у нас дробь со знаменателем <M>3</M>. Работать с ней неудобно. Чтобы избавиться от этого
                        знаменателя, по <Dep to={sameActionRule}>правилу</Dep> одинакового действия умножим обе части
                        уравнения на <M>3</M>. Не забываем про то, что любое действие{' '}
                        <Dep to={alwaysGlobal}>глобальное</Dep>, поэтому левую часть уравнения заключаем в скобки:
                    </P>
                    <BlockMath>{math`
                        \brand{\cdot 3} \ | \ \frac{x}{3} + x = 100 \ | \ \brand{\cdot 3} \\
                        3 \cdot \left( \frac{x}{3} + x \right) = 100 \cdot 3 \\
                        \frac{\cancel{3}x}{\cancel{3}} + 3x = 300 \\
                        x + 3x = 300 \\
                        4x = 300
                    `}</BlockMath>
                    <P>
                        Чтобы <M>x</M> осталось в одиночестве, нужно избавиться от умножения на <M>4</M>. Для этого
                        разделим обе части уравнения на <M>4</M>. Тогда в левой части <M>4</M> и <M>4</M> сократятся, и
                        там останется только <M>x</M>:
                    </P>
                    <BlockMath>{math`
                        \brand{\div 4} \ | \ 4x = 300 \ | \ \brand{\div 4} \\
                        \frac{\cancel{4}x}{\cancel{4}} = \frac{300}{4} \\
                        \boxed{x = 75}
                    `}</BlockMath>
                    <P>
                        Итак, для замешивания <M>100</M> килограммов бетона потребуется <M>75</M> килограммов песка и{' '}
                        <M>{math`\frac{75}{3} = 25`}</M> килограммов цемента.
                    </P>
                </ProblemSection>
            </ProblemSolution>
            <ProblemNote>
                Обратите внимание, что совершенно не важно, что именно мы обозначим за неизвестное. В любом случае мы
                придём к правильному ответу. Разница лишь в количестве преобразований и удобстве решения уравнений.
            </ProblemNote>
        </Problem>

        <Problems $={uniques.magicTriangles} title="Треугольник идиота" level="easy">
            <SubProblem>
                <ProblemDescription>
                    <P>Волшебный треугольник мощности электрического тока:</P>
                    <Image src={magicTriangle1} width="280px" />
                    <P>Исходное равенство:</P>
                    <BlockMath>{math`P = I^2 R`}</BlockMath>
                    <P>
                        Выведите равенства для <M>I^2</M> и <M>R</M>.
                    </P>
                </ProblemDescription>
                <ProblemAnswer>
                    <BlockMath>{math`I^2 = \frac{P}{R} >>{big} R = \frac{P}{I^2}`}</BlockMath>
                </ProblemAnswer>
                <ProblemSolution>
                    <P>
                        Сначала найдём <M>I^2</M>. Сейчас в правой части ему мешает умножение на <M>R</M>. Чтобы
                        избавиться от него, по <Dep to={sameActionRule}>правилу</Dep> одинакового действия разделим обе
                        части уравнения на <M>R</M>. Тогда в правой части <M>R</M> и <M>R</M> сократятся, и там
                        останется только <M>I^2</M>:
                    </P>
                    <BlockMath>{math`
                        \brand{\div R} \ | \ P = I^2 R \ | \ \brand{\div R} \\
                        \frac{P}{R} = \frac{I^2 \cancel{R}}{\cancel{R}} \\
                        \boxed{\frac{P}{R} = I^2}
                    `}</BlockMath>
                    <P>
                        Аналогично можем найти <M>R</M>. Для этого обе части надо разделить уже на <M>I^2</M>.
                    </P>
                    <BlockMath>{math`
                        \brand{\div I^2} \ | \ P = I^2 R \ | \ \brand{\div I^2} \\
                        \frac{P}{I^2} = \frac{\cancel{I^2} R}{\cancel{I^2}} \\
                        \boxed{\frac{P}{I^2} = R}
                    `}</BlockMath>
                </ProblemSolution>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <P>Волшебный треугольник потенциальной энергии:</P>
                    <Image src={magicTriangle2} width="280px" />
                    <P>Исходное равенство:</P>
                    <BlockMath>{math`m = \frac{E_p}{gh}`}</BlockMath>
                    <P>
                        Выведите равенства для <M>E_p</M>, <M>g</M> и <M>h</M>.
                    </P>
                </ProblemDescription>
                <ProblemAnswer>
                    <BlockMath>{math`E_p = mgh >>{big} g = \frac{E_p}{mh} >>{big} h = \frac{E_p}{mg}`}</BlockMath>
                </ProblemAnswer>
                <ProblemSolution>
                    <P>
                        Выведем равенство для <M>E_p</M>. Сейчас в правой части ему мешает деление на <M>gh</M>. Чтобы
                        избавиться от него, по <Dep to={sameActionRule}>правилу</Dep> одинакового действия умножим обе
                        части уравнения на <M>gh</M>. Тогда в правой части <M>gh</M> и <M>gh</M> сократятся, и там
                        останется только <M>E_p</M>:
                    </P>
                    <BlockMath>{math`
                        \brand{\cdot gh} \ | \ m = \frac{E_p}{gh} \ | \ \brand{\cdot gh} \\
                        m \cdot gh = \frac{E_p}{\cancel{gh}} \cdot \cancel{gh} \\
                        \boxed{mgh = E_p}
                    `}</BlockMath>

                    <Hr />

                    <P>
                        Теперь выводим равенство для <M>g</M>. Для начала вынесем из знаменателя. Чтобы сделать это, по
                        правилу одинакового действия умножим обе части уравнения на <M>g</M>. Тогда в правой части{' '}
                        <M>g</M> и <M>g</M> сократятся, и там останется только <M>h</M>:
                    </P>
                    <BlockMath>{math`
                        \brand{\cdot g} \ | \ m = \frac{E_p}{gh} \ | \ \brand{\cdot g} \\
                        mg = \frac{E_p}{\cancel{g}h} \cdot \cancel{g} \\
                        mg = \frac{E_p}{h}
                    `}</BlockMath>
                    <P>
                        Теперь <M>g</M> мешает остаться одной в левой части умножение на <M>m</M>. Чтобы избавиться от
                        него, по правилу одинакового действия разделим обе части уравнения на <M>m</M>.
                    </P>
                    <BlockMath>{math`
                        \brand{\div m} \ | \ mg = \frac{E_p}{h} \ | \ \brand{\div m} \\
                        \frac{\cancel{m}g}{\cancel{m}} = \frac{\frac{E_p}{h}}{m} \\
                        \boxed{g = \frac{E_p}{mh}}
                    `}</BlockMath>

                    <Hr />

                    <P>
                        Равенство для <M>h</M> выводится точно так же, как и для <M>g</M>.
                    </P>
                    <BlockMath>{math`\boxed{h = \frac{E_p}{mg}}`}</BlockMath>
                </ProblemSolution>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <P>Волшебный треугольник кинетической энергии:</P>
                    <Image src={magicTriangle3} width="280px" />
                    <P>Исходное равенство:</P>
                    <BlockMath>{math`2 = \frac{mv^2}{E_k}`}</BlockMath>
                    <P>
                        Выведите равенства для <M>E_k</M>, <M>v^2</M>, <M>m</M> и <M>{math`\frac{1}{2}`}</M>.
                    </P>
                </ProblemDescription>
                <ProblemAnswer>
                    <BlockMath>{math`E_k = \frac{mv^2}{2} >>{big} v^2 = \frac{2E_k}{m} >>{big} m = \frac{2E_k}{v^2} >>{big} \frac{1}{2} = \frac{E_k}{mv^2}`}</BlockMath>
                </ProblemAnswer>
                <ProblemSolution>
                    <P>
                        Выведем равенство для <M>E_k</M>. Вытащим её сначала из знаменателя. Чтобы сделать это, по{' '}
                        <Dep to={sameActionRule}>правилу</Dep> одинакового действия умножим обе части уравнения на{' '}
                        <M>E_k</M>. Тогда в правой части <M>E_k</M> и <M>E_k</M> сократятся, и там останется только{' '}
                        <M>mv^2</M>:
                    </P>
                    <BlockMath>{math`
                        \brand{\cdot E_k} \ | \ 2 = \frac{mv^2}{E_k} \ | \ \brand{\cdot E_k} \\
                        2E_k = \frac{mv^2}{\cancel{E_k}} \cdot \cancel{E_k} \\
                        2E_k = mv^2
                    `}</BlockMath>
                    <P>
                        Теперь <M>E_k</M> мешает остаться одной в левой части умножение на <M>2</M>. Чтобы избавиться от
                        него, по правилу одинакового действия разделим обе части уравнения на <M>2</M>.
                    </P>
                    <BlockMath>{math`
                        \brand{\div 2} \ | \ 2E_k = mv^2 \ | \ \brand{\div 2} \\
                        \frac{\cancel{2}E_k}{\cancel{2}} = \frac{mv^2}{2} \\
                        \boxed{E_k = \frac{mv^2}{2}}
                    `}</BlockMath>

                    <Hr />

                    <P>
                        Теперь выводим равенство для <M>v^2</M>. Сейчас ему в правой части мешает умножение на <M>m</M>{' '}
                        и деление на <M>E_k</M>. Сначала избавимся от деления на <M>E_k</M>. Для этого по правилу
                        одинакового действия умножим обе части уравнения на <M>E_k</M>. Тогда в правой части <M>E_k</M>{' '}
                        и <M>E_k</M> сократятся, и там останется только <M>mv^2</M>:
                    </P>
                    <BlockMath>{math`
                        \brand{\cdot E_k} \ | \ 2 = \frac{mv^2}{E_k} \ | \ \brand{\cdot E_k} \\
                        2E_k = \frac{mv^2}{\cancel{E_k} } \cdot \cancel{E_k} \\
                        2E_k = mv^2
                    `}</BlockMath>
                    <P>
                        Теперь <M>v^2</M> мешает остаться одной в правой части умножение на <M>m</M>. Чтобы избавиться
                        от него, по правилу одинакового действия разделим обе части уравнения на <M>m</M>.
                    </P>
                    <BlockMath>{math`
                        \brand{\div m} \ | \ 2E_k = mv^2 \ | \ \brand{\div m} \\
                        \frac{2E_k}{m} = \frac{\cancel{m}v^2}{\cancel{m}} \\
                        \boxed{\frac{2E_k}{m} = v^2}
                    `}</BlockMath>

                    <Hr />

                    <P>
                        Равенство для <M>m</M> выводится точно так же, как и для <M>v^2</M>.
                    </P>
                    <BlockMath>{math`\boxed{m = \frac{2E_k}{v^2}}`}</BlockMath>

                    <Hr />

                    <P>
                        Выведем равенство для <M>{math`\frac{1}{2}`}</M>. Сейчас число <M>2</M> находится в числителе.
                        Нам надо "перенести" её в знаменатель. Для этого по правилу одинакового действия разделим обе
                        части уравнения на <M>2</M>.
                    </P>
                    <BlockMath>{math`
                        \brand{\div 2} \ | \ 2 = \frac{mv^2}{E_k} \ | \ \brand{\div 2} \\
                        \frac{\cancel{2}}{\cancel{2}} = \frac{\frac{mv^2}{E_k}}{2} \\
                        1 = \frac{mv^2}{2E_k}
                    `}</BlockMath>
                    <P>
                        Теперь числу <M>2</M> в знаменателе мешает умножение на <M>E_k</M> и <M>mv^2</M> в числителе.
                        Сначала избавимся от <M>E_k</M>. Для этого по правилу одинакового действия умножим обе части
                        уравнения на <M>E_k</M>.
                    </P>
                    <BlockMath>{math`
                        \brand{\cdot E_k} \ | \ 1 = \frac{mv^2}{2E_k} \ | \ \brand{\cdot E_k} \\
                        E_k = \frac{mv^2}{2\cancel{E_k}} \cdot \cancel{E_k} \\
                        E_k = \frac{mv^2}{2}
                    `}</BlockMath>
                    <P>
                        Теперь избавляемся от <M>mv^2</M> в числителе. Для этого по правилу одинакового действия делим
                        обе части уравнения на <M>mv^2</M>.
                    </P>
                    <BlockMath>{math`
                        \brand{\div mv^2} \ | \ E_k = \frac{mv^2}{2} \ | \ \brand{\div mv^2} \\
                        \frac{E_k}{mv^2} = \frac{\cancel{mv^2}}{2\cancel{mv^2}} \\
                        \boxed{\frac{E_k}{mv^2} = \frac{1}{2}}
                    `}</BlockMath>
                </ProblemSolution>
            </SubProblem>
        </Problems>

        <Problems title="На вырост" level="easy">
            <SubProblem>
                <ProblemDescription>
                    <P>
                        Ваня старше Лизы в <M>2</M> раза. Если сложить их возраст, то получится число <M>24</M>. Сколько
                        лет Ване и Лизе?
                    </P>
                </ProblemDescription>
                <ProblemCheck label="Возраст Лизы" answer={8} />
                <ProblemCheck label="Возраст Вани" answer={16} />
                <ProblemAnswer>
                    Лизе <M>8</M> лет, а Ване <M>16</M> лет.
                </ProblemAnswer>
                <ProblemSolution>
                    <P>
                        У нас есть хоть какая-то информация о возрасте Вани. Он связан с возрастом Лизы. А вот про
                        возраст Лизы ничего не известно, поэтому обозначим его неизвестной <M>x</M>. Тогда, если возраст
                        Лизы <M>x</M>, то возраст Вани будет вдвое больше, то есть <M>2x</M>. А в сумме возраст Вани{' '}
                        <M>2x</M> и Лизы <M>x</M> равен <M>24</M> годам. Получается уравнение:
                    </P>
                    <BlockMath>{math`2x + x = 24`}</BlockMath>
                    <P>Приведём подобные в левой части уравнения:</P>
                    <BlockMath>{math`3x = 24`}</BlockMath>
                    <P>
                        Чтобы <M>x</M> осталось в одиночестве, надо избавиться от умножения на <M>3</M>. Для этого по{' '}
                        <Dep to={sameActionRule}>правилу</Dep> одинакового действия разделим обе части уравнения на{' '}
                        <M>3</M>. Тогда в левой части можно сократить <M>3</M> и <M>3</M> (<M>3 : 3 = 1</M>), и там
                        останется только <M>x</M>:
                    </P>
                    <BlockMath>{math`
                        \brand{\div 3} \ | \ 3x = 24 \ | \ \brand{\div 3} \\
                        \frac{\cancel{3}x}{\cancel{3}} = \frac{24}{3} \\
                        \boxed{x = 8}
                    `}</BlockMath>
                    <P>
                        За <M>x</M> мы обозначали возраст Лизы, значит ей <M>8</M> лет. А Ване в <M>2</M> раза больше,
                        то есть <M>2 \cdot 8 = 16</M> лет.
                    </P>
                </ProblemSolution>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <P>
                        Пётр старше Марии на <M>6</M> лет, и через <M>2</M> года суммарный возраст Петра и Марии будет{' '}
                        <M>40</M> лет. Сколько лет сейчас Петру и Марии?
                    </P>
                </ProblemDescription>
                <ProblemCheck label="Возраст Марии" answer={15} />
                <ProblemCheck label="Возраст Петра" answer={21} />
                <ProblemAnswer>Марии 15 лет, а Петру 21 год.</ProblemAnswer>
                <ProblemSolution>
                    <P>
                        У нас есть хоть какая-то информация о возрасте Петра. Он связан с возрастом Марии. А вот про
                        возраст Марии ничего не известно, поэтому обозначим его неизвестной <M>x</M>. Тогда, если
                        возраст Марии <M>x</M>, то возраст Петра будет на <M>6</M> лет больше, то есть <M>x + 6</M>.
                        Через два года, когда Марии будет <M>x + 2</M> лет, а Петру <M>x + 6 + 2</M> лет, их суммарный
                        возраст будет равен <M>40</M> годам. Получается уравнение:
                    </P>
                    <BlockMath>{math`\underbrace{(x + 2)}_{\text{Мария}} + \underbrace{(x + 6 + 2)}_{\text{Пётр}} = 40`}</BlockMath>
                    <P>Приведём подобные в левой части уравнения:</P>
                    <BlockMath>{math`
                        x + 2 + x + 6 + 2 = 40 \\
                        2x + 10 = 40
                    `}</BlockMath>
                    <P>
                        Чтобы <M>x</M> осталось в одиночестве, надо избавиться от умножения на <M>2</M> и сложения с{' '}
                        <M>10</M>. Сначала избавимся от сложения с <M>10</M>. Для этого по{' '}
                        <Dep to={sameActionRule}>правилу</Dep> одинакового действия вычтем <M>10</M> из обеих частей
                        уравнения.
                    </P>
                    <BlockMath>{math`
                        \brand{- 10} \ | \ 2x + 10 = 40 \ | \ \brand{- 10} \\
                        -\cancel{10} + 2x + \cancel{10} = 40 - 10 \\
                        2x = 30
                    `}</BlockMath>
                    <P>
                        Теперь обе части уравнения делим на <M>2</M>. Тогда в левой части можно сократить <M>2</M> и{' '}
                        <M>2</M> (<M>2 : 2 = 1</M>), и там останется только <M>x</M>:
                    </P>
                    <BlockMath>{math`
                        \brand{\div 2} \ | \ 2x = 30 \ | \ \brand{\div 2} \\
                        \frac{\cancel{2}x}{\cancel{2}} = \frac{30}{2} \\
                        \boxed{x = 15}
                    `}</BlockMath>
                    <P>
                        За <M>x</M> мы обозначали возраст Марии, значит ей <M>15</M> лет. А Пете сейчас{' '}
                        <M>15 + 6 = 21</M> год.
                    </P>
                </ProblemSolution>
            </SubProblem>
        </Problems>

        <Problem title="Отцы и дети" level="easy" pretty>
            <ProblemDescription>
                <P>
                    Когда мне было <M>14</M>, мой отец был втрое старше меня. Сейчас ему вдвое больше лет, чем мне.
                    Сколько мне лет?
                </P>
            </ProblemDescription>
            <ProblemCheck answer={28} />
            <ProblemHint>Вычислите разницу в возрасте между вами и вашим отцом, используя данные прошлого.</ProblemHint>
            <ProblemHint>
                Используйте эту разницу для построения уравнения, связывающего ваши возрасты сейчас.
            </ProblemHint>
            <ProblemAnswer>
                <M>28</M>
            </ProblemAnswer>
            <ProblemSolution>
                <ProblemSection title="Решение 1">
                    <P>
                        Когда мне было <M>14</M>, мой отец был втрое старше меня. То есть ему тогда было <M>42</M> года.
                        Значит, отец старше меня на <M>42 - 14 = 28</M> лет. Сейчас мне <M>x</M> лет, а отцу вдвое
                        больше, то есть <M>2x</M> лет. Если к моим <M>x</M> лет добавить нашу разницу в возрасте{' '}
                        <M>28</M> лет, то получится его возраст в <M>2x</M> лет:
                    </P>
                    <BlockMath>{math`x + 28 = 2x`}</BlockMath>
                    <P>
                        По <Dep to={sameActionRule}>правилу</Dep> одинакового действия вычтем <M>x</M> из обеих частей
                        уравнения. Тогда в левой части <M>x</M> и <M>-x</M> взаимно уничтожатся (в сумме получается{' '}
                        <M>0</M>), и там останется только <M>28</M>:
                    </P>
                    <BlockMath>{math`
                        \brand{- x} \ | \ x + 28 = 2x \ | \ \brand{- x} \\
                        -\cancel{x} + \cancel{x} + 28 = 2x - x \\
                        \boxed{28 = x}
                    `}</BlockMath>
                    <P>
                        Итак, мне сейчас <M>28</M> лет.
                    </P>
                </ProblemSection>
                <ProblemSection title="Решение 2">
                    <P>
                        Когда мне было <M>14</M>, мой отец был втрое старше меня. То есть ему тогда было <M>42</M> года.
                        Сейчас мне <M>x</M> лет, а отцу вдвое больше, то есть <M>2x</M> лет. С того времени я вырос на{' '}
                        <M>x - 14</M> лет. Отец с того времени вырос на <M>2x - 42</M> лет. Но живём на одной планете и
                        в далёкий космос никто из нас не летал. Поэтому время идёт для нас обоих одинаково. Значит и я,
                        и он постарели на одинаковое количество лет! Получается моя разница в <M>x-14</M> лет это та же
                        разница, что и его разница в <M>2x - 42</M> лет:
                    </P>
                    <BlockMath>{math`x - 14 = 2x - 42`}</BlockMath>
                    <P>
                        А дальше уже нужно решить простое уравнение. Сначала сгруппируем <M>x</M> в правой части
                        уравнения. Для этого избавимся от <M>x</M> в левой части. Чтобы это сделать, по{' '}
                        <Dep to={sameActionRule}>правилу</Dep> одинакового действия вычтем <M>x</M> из обеих частей
                        уравнения:
                    </P>
                    <BlockMath>{math`
                        \brand{- x} \ | \ x - 14 = 2x - 42 \ | \ \brand{- x} \\
                        -\cancel{x} + \cancel{x} - 14 = 2x - 42 - x \\
                        -14 = x - 42
                    `}</BlockMath>
                    <P>
                        Теперь прибавим <M>42</M> к обеим частям уравнения:
                    </P>
                    <BlockMath>{math`
                        \brand{+ 42} \ | \ -14 = x - 42 \ | \ \brand{+ 42} \\
                        -14 + 42 = x - \cancel{42} + \cancel{42} \\
                        \boxed{28 = x}
                    `}</BlockMath>
                    <P>
                        Итак, мне сейчас <M>28</M> лет.
                    </P>
                </ProblemSection>
            </ProblemSolution>
        </Problem>

        <Problems title="Средние уравнения" level="medium">
            <P>Решите уравнение:</P>

            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`x^2 - 121 = 0`}</BlockMath>
                </ProblemDescription>
                <ProblemCheck set={[11, -11]} hint="Через запятую" />
                <ProblemHint>Это уравнение имеет два решения.</ProblemHint>
                <ProblemAnswer>
                    Уравнение имеет два корня: <M>11</M> и <M>-11</M>.
                </ProblemAnswer>
                <ProblemSolution>
                    <P>
                        <M>x^2</M> мешает остаться в одиночестве вычитание <M>121</M>. Чтобы избавиться от него, по{' '}
                        <Dep to={sameActionRule}>правилу</Dep> одинакового действия прибавим <M>121</M> к обеим частям
                        уравнения. Тогда в левой части <M>-121</M> и <M>+121</M> взаимно уничтожатся (в сумме получается{' '}
                        <M>0</M>), и там останется только <M>x^2</M>:
                    </P>
                    <BlockMath>{math`
                        \brand{+ 121} \ | \ x^2 - 121 = 0 \ | \ \brand{+ 121} \\
                        \cancel{121} + x^2 - \cancel{121} = 0 + 121 \\
                        x^2 = 121
                    `}</BlockMath>
                    <P>
                        Подумаем, какое число в квадрате даёт <M>121</M>. Таких числа два: <M>11</M> и <M>-11</M>.
                        Поэтому уравнение имеет два решения:
                    </P>
                    <BlockMath>{math`\boxed{x = 11} >>{big} \boxed{x = -11}`}</BlockMath>
                </ProblemSolution>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`-x - 4 + 5(x+3) = 5(-1 -x) - 2`}</BlockMath>
                </ProblemDescription>
                <ProblemCheck answer={-2} />
                <ProblemHint>Перед решением уравнения раскройте скобки и приведите подобные.</ProblemHint>
                <ProblemAnswer>
                    <M>-2</M>
                </ProblemAnswer>
                <ProblemSolution>
                    <P>Раскроем скобки и приведём подобные в обеих частях уравнения:</P>
                    <BlockMath>{math`
                        -x - 4 + 5x + 15 = -5 -5x - 2 \\
                        4x + 11 = -5x -7
                    `}</BlockMath>
                    <P>
                        Сгруппируем <M>x</M> в левой части уравнения. Для этого надо избавиться от <M>-5x</M> в правой
                        части. Чтобы это сделать, по <Dep to={sameActionRule}>правилу</Dep> одинакового действия
                        прибавим <M>5x</M> к обеим частям уравнения.
                    </P>
                    <BlockMath>{math`
                        \brand{+ 5x} \ | \ 4x + 11 = -5x -7 \ | \ \brand{+ 5x} \\
                        5x + 4x + 11 = -\cancel{5x} -7 + \cancel{5x} \\
                        9x + 11 = -7
                    `}</BlockMath>
                    <P>
                        Теперь <M>x</M> мешает остаться в одиночестве умножение на <M>9</M> и сложение с <M>11</M>.
                        Сначала избавимся от сложения с <M>11</M>. Для этого вычтем <M>11</M> из обеих частей уравнения.
                    </P>
                    <BlockMath>{math`
                        \brand{- 11} \ | \ 9x + 11 = -7 \ | \ \brand{- 11} \\
                        - \cancel{11} + 9x + \cancel{11} = -7 - 11 \\
                        9x = -18
                    `}</BlockMath>
                    <P>
                        Теперь <M>x</M> мешает остаться в одиночестве умножение на <M>9</M>. Чтобы избавиться от него,
                        по правилу одинакового действия разделим обе части уравнения на <M>9</M>.
                    </P>
                    <BlockMath>{math`
                        \brand{\div 9} \ | \ 9x = -18 \ | \ \brand{\div 9} \\
                        \frac{\cancel{9}x}{\cancel{9}} = \frac{-18}{9} \\
                        \boxed{x = -2}
                    `}</BlockMath>
                </ProblemSolution>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`x - \frac{x}{11} = \frac{50}{11}`}</BlockMath>
                </ProblemDescription>
                <ProblemCheck answer={5} />
                <ProblemHint>
                    Подумайте, как одним действием избавиться от <M>11</M> в знаменателях.
                </ProblemHint>
                <ProblemAnswer>
                    <M>5</M>
                </ProblemAnswer>
                <ProblemSolution>
                    <ProblemSection title="Решение 1">
                        <P>
                            У нас в уравнении есть две дроби с одинаковым знаменателем <M>11</M>. Избавимся от этих
                            дробей, по <Dep to={sameActionRule}>правилу</Dep> одинакового действия умножив обе части
                            уравнения на <M>11</M>. Ни в коем случае не забываем про{' '}
                            <Dep to={alwaysGlobal}>глобальность</Dep> этого действия, и левую часть заключаем в скобки:
                        </P>
                        <BlockMath>{math`
                            \brand{\cdot \ 11} \ | \ x - \frac{x}{11} = \frac{50}{11} \ | \ \brand{\cdot 11} \\
                            11 \cdot \left( x - \frac{x}{11} \right) = \frac{50}{\cancel{11}} \cdot \cancel{11} \\
                            11x - \frac{\cancel{11}x}{\cancel{11}} = 50 \\
                            11x - x = 50 \\
                            10x = 50
                        `}</BlockMath>
                        <P>
                            Теперь <M>x</M> мешает остаться в одиночестве в левой части лишь умножение на <M>10</M>.
                            Чтобы избавиться от него, разделим обе части уравнения на <M>10</M>. Тогда в левой части
                            можно провести сокращение:
                        </P>
                        <BlockMath>{math`
                            \brand{\div 10} \ | \ 10x = 50 \ | \ \brand{\div 10} \\
                            \frac{\cancel{10}x}{\cancel{10}} = \frac{50}{10} \\
                            \boxed{x = 5}
                        `}</BlockMath>
                    </ProblemSection>
                    <ProblemSection title="Решение 2">
                        <P>
                            В левой части приведём дробь к общему знаменателю <M>11</M>.
                        </P>
                        <BlockMath>{math`
                            \frac{11x}{11} - \frac{x}{11} = \frac{50}{11} \\
                            \frac{11x - x}{11} = \frac{50}{11} \\
                            \frac{10x}{11} = \frac{50}{11}
                        `}</BlockMath>
                        <P>
                            Теперь <M>x</M> мешают остаться в одиночестве умножение на <M>10</M> и деление на <M>11</M>.
                            Сначала избавимся от деления на <M>11</M>. Для этого по{' '}
                            <Dep to={sameActionRule}>правилу</Dep> одинакового действия умножим обе части уравнения на{' '}
                            <M>11</M>. Тогда в левой части <M>11</M> и <M>11</M> сократятся, и там останется только{' '}
                            <M>10x</M>:
                        </P>
                        <BlockMath>{math`
                            \brand{\cdot 11} \ | \ \frac{10x}{11} = \frac{50}{11} \ | \ \brand{\cdot 11} \\
                            \cancel{11} \cdot \frac{10x}{\cancel{11}} = \frac{50}{\cancel{11}} \cdot \cancel{11} \\
                            10x = 50
                        `}</BlockMath>
                        <P>
                            Делим обе части уравнения на <M>10</M>. Тогда в левой части можно провести сокращение и там
                            останется только <M>x</M>:
                        </P>
                        <BlockMath>{math`
                            \brand{\div 10} \ | \ 10x = 50 \ | \ \brand{\div 10} \\
                            \frac{\cancel{10}x}{\cancel{10}} = \frac{50}{10} \\
                            \boxed{x = 5}
                        `}</BlockMath>
                    </ProblemSection>
                </ProblemSolution>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`\frac{6}{x^2 - 19} = 1`}</BlockMath>
                </ProblemDescription>
                <ProblemCheck label="Корни уравнения" hint="Через запятую" set={[5, -5]} />
                <ProblemHint>
                    Подумайте, как одним действием избавиться от <M>x^2 - 19</M> в знаменателе. На что умножить обе
                    части уравнения?
                </ProblemHint>
                <ProblemAnswer>
                    <M>5</M> и <M>-5</M>
                </ProblemAnswer>
                <ProblemSolution>
                    <P>
                        Вытащим <M>x^2</M> из знаменателя. Чтобы сделать это, по <Dep to={sameActionRule}>правилу</Dep>{' '}
                        одинакового действия умножим обе части уравнения на <M>x^2 - 19</M>.
                    </P>
                    <BlockMath>{math`
                        \brand{\cdot (x^2 - 19)} \ | \ \frac{6}{x^2 - 19} = 1 \ | \ \brand{\cdot (x^2 - 19)} \\
                        \cancel{(x^2-19)}\cdot\frac{6}{\cancel{x^2-19}} = 1 \cdot (x^2 - 19) \\
                        6 = x^2 - 19
                    `}</BlockMath>
                    <P>
                        Теперь <M>x^2</M> мешает остаться в одиночестве в правой части вычитание <M>19</M>. Чтобы
                        избавиться от него, прибавим <M>19</M> к обеим частям уравнения. Тогда в правой части <M>-19</M>{' '}
                        и <M>+19</M> взаимно уничтожатся (в сумме получается <M>0</M>), и там останется только{' '}
                        <M>x^2</M>:
                    </P>
                    <BlockMath>{math`
                        \brand{+ 19} \ | \ 6 = x^2 - 19 \ | \ \brand{+ 19} \\
                        6 + 19 = x^2 - \cancel{19} + \cancel{19} \\
                        25 = x^2
                    `}</BlockMath>
                    <P>
                        Подумаем, какое число в квадрате даёт <M>25</M>. Таких числа два: <M>5</M> и <M>-5</M>. Эти два
                        числа и являются решениями уравнения.
                    </P>
                </ProblemSolution>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`\frac{9x+6}{7} + 3 = \frac{7x}{6}`}</BlockMath>
                </ProblemDescription>
                <ProblemCheck answer={-32.4} />
                <ProblemHint>
                    Подумайте, как одним действием избавиться от <M>7</M> и <M>6</M> в знаменателях.
                </ProblemHint>
                <ProblemAnswer>
                    <M>-32.4</M>
                </ProblemAnswer>
                <ProblemSolution>
                    <ProblemSection title="Решение 1">
                        <P>
                            Нам нужно избавиться от дробей. У них в знаменателях стоят числа <M>7</M> и <M>6</M>.
                            Избавимся от этих знаменателей, по <Dep to={sameActionRule}>правилу</Dep> одинакового
                            действия умножив обе части уравнения и на <M>7</M>, и на <M>6</M>. Естественно не забываем
                            левую часть заключить в скобки, потому что <Dep to={alwaysGlobal}>действие глобальное</Dep>:
                        </P>
                        <BlockMath>{math`
                            \brand{\cdot 7\cdot 6} \ | \ \frac{9x+6}{7} + 3 = \frac{7x}{6} \ | \ \brand{\cdot 7\cdot 6} \\
                            7\cdot 6 \cdot \left( \frac{9x+6}{7} + 3 \right) = \frac{7x}{\cancel{6}} \cdot 7\cdot \cancel{6} \\
                            \frac{\cancel{7}\cdot 6 \cdot(9x + 6)}{\cancel{7}} + 3 \cdot 7\cdot 6 = 49 x \\
                            54x + 36 + 126 = 49x \\
                            54x + 162 = 49x
                        `}</BlockMath>
                        <P>
                            Сгруппируем <M>x</M> в правой части уравнения. Для этого надо избавиться от <M>54x</M> в
                            левой части. Чтобы это сделать, вычтем <M>54x</M> из обеих частей уравнения.
                        </P>
                        <BlockMath>{math`
                            \brand{- 54x} \ | \ 54x + 162 = 49x \ | \ \brand{- 54x} \\
                            -\cancel{54x} + \cancel{54x} + 162 = 49x - 54x \\
                            162 = -5x
                        `}</BlockMath>
                        <P>
                            Теперь <M>x</M> мешает остаться в одиночестве в правой части лишь умножение на <M>-5</M>.
                            Чтобы избавиться от него, разделим обе части уравнения на <M>-5</M>.
                        </P>
                        <BlockMath>{math`
                            \brand{\div -5} \ | \ 162 = -5x \ | \ \brand{\div -5} \\
                            \frac{162}{-5} = \frac{\cancel{-5}x}{\cancel{-5}} \\
                            -\frac{162}{5} = x \\
                            \boxed{-32.4 = x}
                        `}</BlockMath>
                    </ProblemSection>
                    <ProblemSection title="Решение 2">
                        <P>
                            Приведём все дроби к общему знаменателю <M>42</M>. Левую домножаем на <M>6</M>, центральную
                            на <M>6</M> и на <M>7</M>, а правую на <M>7</M>:
                        </P>
                        <BlockMath>{math`
                            \frac{6(9x+6)}{42} + \frac{3\cdot 6\cdot 7}{42} = \frac{7x \cdot 7}{42} \\
                            \frac{54x + 36}{42} + \frac{126}{42} = \frac{49x}{42} \\
                            \frac{54x + 36 + 126}{42} = \frac{49x}{42} \\
                            \frac{54x + 162}{42} = \frac{49x}{42}
                        `}</BlockMath>
                        <P>
                            Сгруппируем <M>x</M> в левой части уравнения. Для этого надо избавиться от дроби справа.
                            Чтобы это сделать, по <Dep to={sameActionRule}>правилу</Dep> одинакового действия вычтем из
                            обеих частей уравнения дробь <M>{math`\frac{49x}{42}`}</M>:
                        </P>
                        <BlockMath>{math`
                            \brand{- \frac{49x}{42}} \ | \ \frac{54x + 162}{42} = \frac{49x}{42} \ | \ \brand{- \frac{49x}{42}} \\
                            -\frac{49x}{42} + \frac{54x + 162}{42} = \cancel{\frac{49x}{42}} - \cancel{\frac{49x}{42}} \\
                            \frac{54x + 162 - 49x}{42} = 0 \\
                            \frac{5x + 162}{42} = 0
                        `}</BlockMath>
                        <P>
                            Чтобы <M>x</M> остался один, надо избавиться от умножения на <M>5</M>, сложения с <M>162</M>{' '}
                            и деления на <M>42</M>. Сначала избавимся от деления на <M>42</M>. Для этого умножим обе
                            части уравнения на <M>42</M>:
                        </P>
                        <BlockMath>{math`
                            \brand{\cdot 42} \ | \ \frac{5x + 162}{42} = 0 \ | \ \brand{\cdot 42} \\
                            \cancel{42}\cdot \frac{5x + 162}{\cancel{42}} = 0\cdot 42 \\
                            5x + 162 = 0
                        `}</BlockMath>
                        <P>
                            Теперь избавимся от сложения с <M>162</M>. Для этого вычтем <M>162</M> из обеих частей
                            уравнения:
                        </P>
                        <BlockMath>{math`
                            \brand{- 162} \ | \ 5x + 162 = 0 \ | \ \brand{- 162} \\
                            -\cancel{162} + 5x + \cancel{162} = 0 - 162 \\
                            5x = -162
                        `}</BlockMath>
                        <P>
                            Наконец, избавимся от умножения на <M>5</M>. Для этого разделим обе части уравнения на{' '}
                            <M>5</M>:
                        </P>
                        <BlockMath>{math`
                            \brand{\div 5} \ | \ 5x = -162 \ | \ \brand{\div 5} \\
                            \frac{\cancel{5}x}{\cancel{5}} = \frac{-162}{5} \\
                            x = -\frac{162}{5} \\
                            \boxed{x = -32.4}
                        `}</BlockMath>
                    </ProblemSection>
                </ProblemSolution>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`\frac{12}{x+5} = -\frac{12}{5}`}</BlockMath>
                </ProblemDescription>
                <ProblemCheck answer={-10} />
                <ProblemHint>У дробей одинаковые числители. От них можно избавиться одним действием.</ProblemHint>
                <ProblemAnswer>
                    <M>-10</M>
                </ProblemAnswer>
                <ProblemSolution>
                    <P>
                        Замечаем, что в числителях обеих дробей стоит одно и то же число <M>12</M>. Мы можем сильно
                        упростить уравнение, если по <Dep to={sameActionRule}>правилу</Dep> одинакового действия
                        разделим обе части уравнения на <M>12</M>.
                    </P>
                    <BlockMath>{math`
                        \brand{\div 12} \ | \ \frac{12}{x+5} = -\frac{12}{5} \ | \ \brand{\div 12} \\
                        \frac{\frac{12}{x+5}}{12} = -\frac{\frac{12}{5}}{12} \\
                        \frac{\cancel{12}}{(x+5)\cdot\cancel{12}} = -\frac{\cancel{12}}{5\cdot\cancel{12}} \\
                        \frac{1}{x+5} = -\frac{1}{5}
                    `}</BlockMath>
                    <P>
                        Теперь вытащим <M>x+5</M> из знаменателя. Для этого умножим обе части уравнения на <M>x+5</M>.
                    </P>
                    <BlockMath>{math`
                        \brand{\cdot (x+5)} \ | \ \frac{1}{x+5} = -\frac{1}{5} \ | \ \brand{\cdot (x+5)} \\
                        \cancel{(x+5)} \cdot \frac{1}{\cancel{x+5}} = -\frac{1}{5} \cdot (x+5) \\
                        1 = -\frac{x+5}{5}
                    `}</BlockMath>
                    <P>
                        <M>x</M> мешает остаться в одиночестве в правой части сложение с <M>5</M>, деление на <M>5</M> и
                        умножение на <M>-1</M>. Сначала избавимся от умножения на <M>-1</M>. Для этого умножим обе части
                        уравнения на <M>-1</M>:
                    </P>
                    <BlockMath>{math`
                        \brand{\cdot -1} \ | \ 1 = -\frac{x+5}{5} \ | \ \brand{\cdot -1} \\
                        -1 = \underbrace{(-1)\cdot(-1)}_{1}\cdot\frac{x+5}{5} \\
                        -1 = \frac{x+5}{5}
                    `}</BlockMath>
                    <P>
                        Теперь избавимся от деления на <M>5</M>. Для этого умножим обе части уравнения на <M>5</M>.
                    </P>
                    <BlockMath>{math`
                        \brand{\cdot 5} \ | \ -1 = \frac{x+5}{5} \ | \ \brand{\cdot 5} \\
                        5\cdot -1 = \frac{x+5}{\cancel{5}} \cdot \cancel{5} \\
                        -5 = x+5
                    `}</BlockMath>
                    <P>
                        Наконец, избавимся от сложения с <M>5</M>. Для этого вычтем <M>5</M> из обеих частей уравнения:
                    </P>
                    <BlockMath>{math`
                        \brand{- 5} \ | \ -5 = x+5 \ | \ \brand{- 5} \\
                        -\cancel{5} - 5 = x + \cancel{5} - \cancel{5} \\
                        \boxed{-10 = x}
                    `}</BlockMath>
                </ProblemSolution>
            </SubProblem>
        </Problems>

        <Problems
            $={uniques.linearRoot}
            title="Формула линейных уравнений"
            level="medium"
            snippet={{
                quick: true,
                search: true,
                description: `
                Формула, по которой можно очень быстро найти корень любого уравнения вида Ax + B = 0.
            `,
            }}
        >
            <SubProblem label="Формула">
                <ProblemDescription>
                    <P>Выведите общую формулу для решения любого линейного уравнения вида:</P>
                    <BlockMath>{math`Ax + B = 0, \enspace A \neq 0`}</BlockMath>
                </ProblemDescription>
                <ProblemHint>
                    При помощи <Dep to={sameActionRule}>правила одинакового действия</Dep> выведите изолируйте <M>x</M>{' '}
                    с одной стороны уравнения, а все остальные данные с другой.
                </ProblemHint>
                <ProblemAnswer>
                    <BlockMath>{math`x = -\frac{B}{A}`}</BlockMath>
                </ProblemAnswer>
                <ProblemSolution>
                    <P>
                        По <Dep to={sameActionRule}>правилу одинакового действия</Dep> вычтем <M>B</M> из обеих частей
                        уравнения. Тогда в левой части <M>B</M> и <M>-B</M> взаимно уничтожатся (в сумме получается{' '}
                        <M>0</M>), и там останется только <M>Ax</M>:
                    </P>
                    <BlockMath>{math`
                        \brand{- B} \ | \ Ax + B = 0 \ | \ \brand{- B} \\
                        Ax + \cancel{B} - \cancel{B} = 0 - B \\
                        Ax = -B
                    `}</BlockMath>
                    <P>
                        Теперь, чтобы <M>x</M> осталось в одиночестве, нужно разделить обе части уравнения на <M>A</M>:
                    </P>
                    <BlockMath>{math`
                        \brand{\div A} \ | \ Ax = -B \ | \ \brand{\div A} \\
                        \frac{\cancel{A}x}{\cancel{A}} = \frac{-B}{A} \\
                        x = -\frac{B}{A}
                    `}</BlockMath>
                    <P>
                        Получается, если нам удастся привести уравнение к виду <M>Ax + B = 0</M>, то его корень всегда
                        можно будет найти по формуле:
                    </P>
                    <BlockMath>{math`\boxed{x = -\frac{B}{A}}`}</BlockMath>
                </ProblemSolution>
            </SubProblem>

            <SubProblem label="Условие">
                <ProblemDescription>
                    <P>
                        Зачем при выводе формулы в условии было указано, что <M>A \neq 0</M>?
                        <Br />
                        Что произойдет с уравнением, если <M>A = 0</M>?
                        <Br />
                        Какие у него будут корни?
                    </P>
                </ProblemDescription>
                <ProblemHint>
                    Просто подставьте <M>0</M> вместо <M>A</M> и изучите результат.
                </ProblemHint>
                <ProblemAnswer>
                    Если <M>A = 0</M>, то либо любое число является корнем такого уравнения (если <M>B = 0</M>), либо
                    корней у этого уравнения нет вообще (если <M>B \neq 0</M>).
                </ProblemAnswer>
                <ProblemSolution>
                    <P>
                        Зачем гадать? Давайте возьмем, да и подставим <M>A = 0</M> в формулу:
                    </P>
                    <BlockMath>{math`0 \cdot x + B = 0 \\ 0 + B = 0 \\ B = 0`}</BlockMath>
                    <P>
                        Получается интересная ситуация. Переменная <M>x</M> полностью "уходит" из уравнения и мы
                        получаем просто равенство <M>B = 0</M>. И тут есть два варианта:
                    </P>
                    <List type="ol">
                        <Li>
                            <P>
                                Если <M>B</M> действительно равно <M>0</M>, то получается верное равенство <M>0 = 0</M>{' '}
                                вне зависимости от того, что мы подставим вместо <M>x</M>. То есть у уравнения{' '}
                                <M>0\cdot x + 0 = 0</M> бесконечно много решений.
                            </P>
                            <BlockMath>{math`0 \cdot 3 + 0 = 0 \rarr 0 \overset{\checkmark}{=} 0 >>{big} 0 \cdot -999 + 0 = 0 \rarr 0 \overset{\checkmark}{=} 0 >>{big} 0 \cdot \pi + 0 = 0 \rarr 0 \overset{\checkmark}{=} 0`}</BlockMath>
                        </Li>
                        <Li>
                            <P>
                                А вот если <M>B</M> не равно <M>0</M>, то всегда будет неверное равенство <M>B = 0</M>,
                                чтобы мы не подставили вместо <M>x</M>. То есть у уравнения <M>0\cdot x + B = 0</M>{' '}
                                вообще нет решений.
                            </P>
                            <BlockMath>{math`0 \cdot 3 + 5 = 0 \rarr 5 \overset{\times}{=} 0 >>{big} 0 \cdot -999 + 7 = 0 \rarr 7 \overset{\times}{=} 0 >>{big} 0 \cdot \pi + 1 = 0 \rarr 1 \overset{\times}{=} 0`}</BlockMath>
                        </Li>
                    </List>
                </ProblemSolution>
            </SubProblem>

            <SubProblem label="Отработка" script={generalFormula()} />
        </Problems>

        <Problem $={uniques.twister} title="Кручу-верчу, запутать хочу" level="medium" pretty method>
            <ProblemDescription>
                <P>Представьте, что у вас есть следующее равенство:</P>
                <BlockMath>{math`ax^2 + bx + c = y^3 - t`}</BlockMath>
                <P>Теперь возьмем и просто поменяем местами левые и правые части равенства:</P>
                <BlockMath>{math`y^3 - t = ax^2 + bx + c`}</BlockMath>
                <List type="ol">
                    <Li>Строго докажите, что любое равенство можно развернуть и оно останется верным.</Li>
                    <Li>
                        Строго докажите, что любое равенство можно развернуть при помощи{' '}
                        <Dep to={sameActionRule}>правила одинакового действия</Dep>.
                    </Li>
                </List>
            </ProblemDescription>
            <ProblemHint>
                Для строгого доказательства воспользуйтесь{' '}
                <Dep to={equalityFalseTrue}>определением верного равенства</Dep>.
            </ProblemHint>
            <ProblemHint>
                При "смене мест" вручную при помощи <Dep to={sameActionRule}>правила одинакового действия</Dep> вам в
                конце нужно будет просто умножить обе части равенства на <M>-1</M>.
            </ProblemHint>
            <ProblemSolution>
                <ProblemSection title="Бытовой смысл">
                    <P>
                        В статье мы постоянно пользовались пользовались аналогией с механическими весами. Равенство --
                        это весы. Но весы всегда можно просто <B>развернуть</B>, и тогда левая чаша станет правой, а
                        правая -- левой! Больше ничего не меняется. Как было равенство верным, так и останется после
                        разворота весов!
                    </P>
                </ProblemSection>
                <ProblemSection title="Строгое доказательство">
                    <P>
                        Согласно <Dep to={equalityFalseTrue}>определению верного равенства</Dep>, слева и справа от
                        знака "равно" стоят выражения, которые обозначают один и тот же объект. Если мы поменяем местами
                        левые и правые части равенства, у нас по-прежнему слева и справа от знака "равно" будут стоять
                        выражения, которые обозначают один и тот же объект. Ничего не поменялось. Новое и старое
                        равенства <B>абсолютно</B> одинаковые.
                    </P>
                    <P>{QED}</P>
                </ProblemSection>
                <ProblemSection title="Разворот вручную">
                    <P>
                        Вот знаете, иногда так не хочется думать... Вот бы просто скрыть стрёмное выражение за
                        какой-нибудь буквой и забыть про него. Что же, это как раз тот случай, когда так и надо сделать.
                        Любое левое выражение обозначаем буквой <M>A</M>, а любое правое -- буквой <M>B</M>. Тогда у нас
                        получается следующее равенство:
                    </P>
                    <BlockMath>{math`A = B`}</BlockMath>
                    <P>
                        При помощи <Dep to={sameActionRule}>правила одинакового действия</Dep> вычитаем <M>A</M> из
                        обеих частей равенства.
                    </P>
                    <BlockMath>{math`
                        \brand{- A} \ | \ A = B \ | \ \brand{- A} \\
                        \cancel{A} - \cancel{A} = B - A \\
                        0 = B - A
                    `}</BlockMath>
                    <P>
                        Теперь вычитаем <M>B</M> из обеих частей равенства:
                    </P>
                    <BlockMath>{math`
                        \brand{- B} \ | \ 0 = B - A \ | \ \brand{- B} \\
                        -B = \cancel{B} - A - \cancel{B} \\
                        -B = -A
                    `}</BlockMath>
                    <P>
                        Наконец, умножаем обе части равенства на <M>-1</M>:
                    </P>
                    <BlockMath>{math`
                        \brand{\cdot -1} \ | \ -B = -A \ | \ \brand{\cdot -1} \\
                        -(-B) = -(-A) \\
                        B = A
                    `}</BlockMath>
                    <P>
                        Вуаля, мы вручную добились такого же эффекта, как если бы развернули весы! Причем проделать это
                        можно с любым равенством! Значит, любое равенство можно развернуть! Вот она, мощь абстракций!
                    </P>
                    <P>{QED}</P>
                </ProblemSection>
            </ProblemSolution>
        </Problem>

        <Problems title="Большое путешествие" level="medium">
            <SubProblem>
                <ProblemDescription>
                    <P>
                        Алина отправилась в поход на <M>3</M> дня. Длина всего маршрута составила <M>111</M> километров.
                        За второй день она прошла на <M>5</M> километров больше, чем за первый. А за третий день она
                        прошла на <M>10</M> километров меньше, чем за второй. Сколько километров прошла Алина за каждый
                        день?
                    </P>
                </ProblemDescription>
                <ProblemCheck label="Первый день" answer={37} />
                <ProblemCheck label="Второй день" answer={42} />
                <ProblemCheck label="Третий день" answer={32} />
                <ProblemHint>
                    Обозначьте за <M>x</M> количество километров, которые Алина прошла за первый день.
                </ProblemHint>
                <ProblemHint>
                    Тогда за второй день она прошла <M>x + 5</M> километров.
                </ProblemHint>
                <ProblemHint>
                    Для третьего дня надо вычесть <M>10</M> километров из второго дня.
                </ProblemHint>
                <ProblemAnswer>
                    За первый день Алина прошла <M>37</M> километров, за второй день <M>42</M> километра, а за третий
                    день <M>32</M> километра.
                </ProblemAnswer>
                <ProblemSolution>
                    <P>
                        У нас есть хоть какие-то данные о том, сколько Алина прошла за второй и третий дни. Совсем
                        ничего не известно лишь про первый день. Поэтому обозначим за <M>x</M> количество километров,
                        которые Алина прошла за первый день. За второй день она прошла на <M>5</M> километров больше, то
                        есть <M>x + 5</M> километров. А за третий день она прошла на <M>10</M> километров меньше, чем за
                        второй, то есть из километров второго дня (<M>x + 5</M>) вычтем <M>10</M> километров:{' '}
                        <M>(x + 5) - 10</M> километров. Получается за третий день Алина прошла <M>x - 5</M> километров.
                    </P>
                    <P>
                        Всего за три дня она прошла весь маршрут, то есть <M>111</M> километров. Значит мы можем
                        составить уравнение:
                    </P>
                    <BlockMath>{math`\underbrace{x}_{\small Д1} + \underbrace{(x+5)}_{\small Д2} + \underbrace{(x-5)}_{\small Д3} = 111`}</BlockMath>
                    <P>Приводим подобные в левой части:</P>
                    <BlockMath>{math`
                        x + x + \cancel{5} + x - \cancel{5} = 111 \\
                        3x = 111
                    `}</BlockMath>
                    <P>
                        Чтобы <M>x</M> остался в одиночестве, делим обе части уравнения на <M>3</M>. Тогда в левой части
                        можно сократить <M>3</M> и <M>3</M> (<M>3 : 3 = 1</M>), и там останется только <M>x</M>:
                    </P>
                    <BlockMath>{math`
                        \brand{\div 3} \ | \ 3x = 111 \ | \ \brand{\div 3} \\
                        \frac{\cancel{3}x}{\cancel{3}} = \frac{111}{3} \\
                        \boxed{x = 37}
                    `}</BlockMath>
                    <P>
                        За <M>x</M> мы обозначали количество километров, которые Алина прошла за первый день. Значит за
                        второй день она прошла <M>37 + 5 = 42</M> километра, а за третий день <M>37 - 5 = 32</M>{' '}
                        километра.
                    </P>
                </ProblemSolution>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <P>
                        Павел отправился покорять горный маршрут длиной в <M>42</M> километра. В первый день он прошел
                        вдвое меньше, чем за второй и третий дни вместе взятые. А за относительно легкий третий день он
                        прошел на <M>6</M> километров больше, чем за второй. Сколько километров прошел Павел за каждый
                        день?
                    </P>
                </ProblemDescription>
                <ProblemCheck label="Первый день" answer={14} />
                <ProblemCheck label="Второй день" answer={11} />
                <ProblemCheck label="Третий день" answer={17} />
                <ProblemHint>
                    Обозначьте за <M>x</M> количество километров, которые Павел прошел за второй день.
                </ProblemHint>
                <ProblemHint>
                    Тогда за третий день он прошел <M>x + 6</M> километров.
                </ProblemHint>
                <ProblemHint>
                    <P>А за первый день он прошел вдвое меньше, чем за второй и третий дни вместе взятые:</P>
                    <BlockMath>{math`\frac{x + (x + 6)}{2} = \frac{2x + 6}{2}`}</BlockMath>
                </ProblemHint>
                <ProblemAnswer>
                    За первый день Павел прошел <M>14</M> километров, за второй день <M>11</M> километров, а за третий
                    день <M>17</M> километров.
                </ProblemAnswer>
                <ProblemSolution>
                    <P>
                        У нас вообще нет никаких данных про второй день. Поэтому обозначим за <M>x</M> количество
                        километров, которые Павел прошел за второй день. За третий день он прошел на <M>6</M> километров
                        больше, чем за второй, то есть <M>x + 6</M> километров.
                    </P>
                    <P>
                        А вот с первым днем все интереснее. Он прошел вдвое меньше, чем за второй и третий дни вместе
                        взятые. Поэтому сначала складываем <M>x</M> и <M>x + 6</M> (это будет количество километров,
                        которые Павел прошел за второй и третий дни вместе взятые), а потом делим на <M>2</M>:
                    </P>
                    <BlockMath>{math`\frac{x + x + 6}{2} = \frac{2x + 6}{2}`}</BlockMath>
                    <P>
                        Всего за три дня он прошел весь маршрут, то есть <M>42</M> километра. Значит мы можем составить
                        уравнение:
                    </P>
                    <BlockMath>{math`\underbrace{\frac{2x + 6}{2}}_{\small Д1} + \underbrace{x}_{\small Д2} + \underbrace{(x+6)}_{\small Д3} = 42`}</BlockMath>
                    <P>
                        Избавимся от знаменателя <M>2</M> у дроби в левой части уравнения. Для этого по{' '}
                        <Dep to={sameActionRule}>правилу</Dep> одинакового действия умножим обе части уравнения на{' '}
                        <M>2</M>. И не забываем левую часть заключить в скобки, так как это{' '}
                        <Dep to={alwaysGlobal}>глобальное действие</Dep>!
                    </P>
                    <BlockMath>{math`
                        \brand{\cdot 2} \ | \ \frac{2x + 6}{2} + x + (x+6) = 42 \ | \ \brand{\cdot 2} \\
                        2\left(\frac{2x + 6}{2} + x + x+6 \right) = 42 \cdot 2 \\
                        2x + 6 + 2x + 2x + 12 = 84 \\
                        6x + 18 = 84
                    `}</BlockMath>
                    <P>
                        Чтобы <M>x</M> остался в одиночестве, нужно избавиться от умножения на <M>6</M> и сложения с{' '}
                        <M>18</M>. Сначала избавимся от сложения с <M>18</M>. Чтобы это сделать, вычтем <M>18</M> из
                        обеих частей уравнения:
                    </P>
                    <BlockMath>{math`
                        \brand{- 18} \ | \ 6x + 18 = 84 \ | \ \brand{- 18} \\
                        -\cancel{18} + 6x + \cancel{18} = 84 - 18 \\
                        6x = 66
                    `}</BlockMath>
                    <P>
                        Теперь <M>x</M> мешает остаться в одиночестве лишь умножение на <M>6</M>. Поделим обе части
                        уравнения на <M>6</M>.
                    </P>
                    <BlockMath>{math`
                        \brand{\div 6} \ | \ 6x = 66 \ | \ \brand{\div 6} \\
                        \frac{\cancel{6}x}{\cancel{6}} = \frac{66}{6} \\
                        \boxed{x = 11}
                    `}</BlockMath>
                    <P>
                        За <M>x</M> мы обозначали количество километров, которые Павел прошел за второй день. Значит за
                        третий день он прошел <M>x + 6 = 11 + 6 = 17</M> километров. А за первый день он прошел вдвое
                        меньше, чем за второй и третий дни вместе взятые, то есть <M>(11 + 17) : 2 = 14</M> километров.
                    </P>
                </ProblemSolution>
            </SubProblem>
        </Problems>

        <Problems $={uniques.zeroFactors} title="Нулевые множители" level="medium" method>
            <SubProblem label="Образец">
                <ProblemDescription>
                    <P>
                        В результате преобразований уравнения часто сводятся к произведению множителей с одной стороны и
                        нулю с другой. Такие уравнения решаются очень просто и сейчас вы научитесь это делать. Начнем с
                        элементарного примера:
                    </P>
                    <BlockMath>{math`(x + 3)(x - 2) = 0`}</BlockMath>
                </ProblemDescription>
                <ProblemCheck label="Корни уравнения" hint="Через запятую" set={[2, -3]} />
                <ProblemHint>
                    Если получится сделать равным нулю хотя бы один из множителей, то всё произведение станет равно
                    нулю.
                </ProblemHint>
                <ProblemHint>"Зануление" каждого множителя приведет к новому корню исходного уравнения.</ProblemHint>
                <ProblemAnswer>
                    <M>-3</M> и <M>2</M>
                </ProblemAnswer>
                <ProblemSolution>
                    <P>
                        Слева у нас два множителя: <M>(x + 3)</M> и <M>(x - 2)</M>. Суть в том, что если мы сможем хотя
                        бы одну из этих скобок сделать равной нулю, то всё произведение станет равно нулю. Например,
                        если мы смогли как-то сделать левую скобку равной нулю, то вот что получится:
                    </P>

                    <BlockMath>{math`
                        \underbrace{(x + 3)}_{0} \cdot (x - 2) = 0 \\
                        0 \cdot (x - 2) = 0 \\
                        0 = 0
                    `}</BlockMath>

                    <P>
                        Автоматически получили истинное равенство! Причем абсолютно не важно, что получится в скобке
                        справа. Это "что-то" будет умножено на <M>0</M> и всё равно даст <M>0</M>. То же самое
                        получится, если мы сделаем равной нулю правую скобку:
                    </P>

                    <BlockMath>{math`
                        (x + 3) \cdot \underbrace{(x - 2)}_{0} = 0 \\
                        (x + 3) \cdot 0 = 0 \\
                        0 = 0
                    `}</BlockMath>

                    <P>
                        Получается, наше уравнение разбивается на два под-уравнения, цель каждого из которых -- сделать
                        свой множитель равным нулю:
                    </P>

                    <BlockMath>{math`
                        \def\arraystretch{1.5}
                        \begin{array}{cc}
                            \text{\small Под-уравнение 1} & \text{\small Под-уравнение 2} \\
                            (x + 3) = 0 & (x - 2) = 0 \\
                            x + 3 = 0 & x - 2 = 0 \\
                            \boxed{x = -3} & \boxed{x = 2}
                        \end{array}
                    `}</BlockMath>

                    <P>
                        Получили два решения уравнения: <M>-3</M> и <M>2</M>. При подстановке любого из них в уравнение
                        какой-то из множителей станет равным нулю и умножит на ноль всю остальную часть, делая равенство
                        истинным! При подстановке <M>-3</M> нулю станет равна скобка <M>(x + 3)</M>, а при подстановке{' '}
                        <M>2</M> -- скобка <M>(x - 2)</M>.
                    </P>
                </ProblemSolution>
                <ProblemNote>
                    Когда вы видите уравнения, целиком состоящие из подобных скобок, можно даже не проводить все эти
                    разделения на под-уравнения, а сразу "увидеть" нужные корни. Это числа после неизвестной, взятые с
                    противоположным знаком. В нашем случае после <M>x</M> стоят <M>+3</M> и <M>-2</M>, значит корни
                    будут <M>-3</M> и <M>2</M>.
                </ProblemNote>
            </SubProblem>

            <SubProblem script={zeroFactors()} />

            <SubProblem>
                <ProblemDescription>
                    <P>Решите уравнение:</P>
                    <BlockMath>{math`x(x + 7)(x - 11) = 0`}</BlockMath>
                </ProblemDescription>
                <ProblemCheck label="Корни уравнения" hint="Через запятую" set={[0, -7, 11]} />
                <ProblemHint>
                    Здесь множителя уже три и получается три под-уравнения, а значит и три решения у исходного
                    уравнения.
                </ProblemHint>
                <ProblemAnswer>
                    <M>0</M>, <M>-7</M> и <M>11</M>
                </ProblemAnswer>
                <ProblemSolution>
                    <P>
                        Здесь множителя уже три и получается три под-уравнения, а значит и три решения у исходного
                        уравнения. Причем первое под-уравнение уже "автоматически решено" за нас, так как $x$ в нем уже
                        стоит в одиночестве:
                    </P>
                    <BlockMath>{math`
                        \def\arraystretch{1.5}
                        \begin{array}{cc}
                            \text{\small Под-уравнение 1} & \text{\small Под-уравнение 2} & \text{\small Под-уравнение 3} \\
                            \boxed{x = 0} & x + 7 = 0 & x - 11 = 0 \\
                            & \boxed{x = -7} & \boxed{x = 11}
                        \end{array}
                    `}</BlockMath>
                </ProblemSolution>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <P>Решите уравнение:</P>
                    <BlockMath>{math`10(x+3)(2x-8)(8x+1) = 0`}</BlockMath>
                </ProblemDescription>
                <ProblemCheck label="Корни уравнения" hint="Через запятую" set={[-3, 4, [-0.125, '-1/8']]} />
                <ProblemHint>
                    Избавьтесь от <M>10</M>, затем решите под-уравнения для каждого множителя.
                </ProblemHint>
                <ProblemHint>
                    Первое под-уравнение решается тривиально. Остальные уже надо решать как полноценные уравнения.
                </ProblemHint>
                <ProblemSolution>
                    <P>
                        Чтобы <M>10</M> нам не мешала решать уравнение, по <Dep to={sameActionRule}>правилу</Dep>{' '}
                        одинакового действия разделим обе части уравнения на <M>10</M>.
                    </P>
                    <BlockMath>{math`
                        \brand{\div 10} \ | \ 10(x+3)(2x-8)(8x+1) = 0 \ | \ \brand{\div 10} \\
                        \frac{\cancel{10}(x+3)(2x-8)(8x+1)}{\cancel{10}} = \frac{0}{10} \\
                        (x+3)(2x-8)(8x+1) = 0
                    `}</BlockMath>
                    <P>
                        Теперь в левой части у нас три множителя с <M>x</M>, а значит три под-уравнения. Первое
                        под-уравнение решается тривиально и даёт корень <M>-3</M>, то второе и третье уже надо решать.
                    </P>
                    <ProblemSection title="Второе под-уравнение">
                        <BlockMath>{math`2x - 8 = 0`}</BlockMath>
                        <P>
                            Чтобы <M>x</M> остался в одиночестве, сначала избавимся от вычитания <M>8</M>, для этого по
                            правилу одинакового действия прибавим <M>8</M> к обеим частям уравнения:
                        </P>
                        <BlockMath>{math`
                            \brand{+ 8} \ | \ 2x - 8 = 0 \ | \ \brand{+ 8} \\
                            \cancel{8} + 2x - \cancel{8} = 0 + 8 \\
                            2x = 8
                        `}</BlockMath>
                        <P>
                            Теперь делим обе части уравнения на <M>2</M>:
                        </P>
                        <BlockMath>{math`
                            \brand{\div 2} \ | \ 2x = 8 \ | \ \brand{\div 2} \\
                            \frac{\cancel{2}x}{\cancel{2}} = \frac{8}{2} \\
                            \boxed{x = 4}
                        `}</BlockMath>
                    </ProblemSection>
                    <ProblemSection title="Третье под-уравнение">
                        <BlockMath>{math`8x + 1 = 0`}</BlockMath>
                        <P>
                            Чтобы <M>x</M> остался один, надо избавиться от умножения на <M>8</M> и сложения <M>1</M>.
                            Сначала избавимся от сложения <M>1</M>. Для этого по правилу одинакового действия вычтем{' '}
                            <M>1</M> из обеих частей уравнения:
                        </P>
                        <BlockMath>{math`
                            \brand{- 1} \ | \ 8x + 1 = 0 \ | \ \brand{- 1} \\
                            -\cancel{1} + 8x + \cancel{1} = 0 - 1 \\
                            8x = -1
                        `}</BlockMath>
                        <P>
                            Теперь делим обе части уравнения на <M>8</M>:
                        </P>
                        <BlockMath>{math`
                            \brand{\div 8} \ | \ 8x = -1 \ | \ \brand{\div 8} \\
                            \frac{\cancel{8}x}{\cancel{8}} = \frac{-1}{8} \\
                            \boxed{x = -\frac{1}{8}}
                        `}</BlockMath>
                    </ProblemSection>
                    <ProblemSection title="Итог">
                        <P>
                            Исходное уравнение имеет три решения: <M>-3</M>, <M>4</M> и <M>{math`-\frac{1}{8}`}</M>,
                            ведь подстановка любого из этих трёх чисел вместо <M>x</M> в исходном уравнении приведёт к
                            превращению соответствующего множителя в ноль, а он уже умножится на все остальные множители
                            и даст ноль в целом во всей левой части уравнения, делая равенство истинным.
                        </P>
                    </ProblemSection>
                </ProblemSolution>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <P>Решите уравнение:</P>
                    <BlockMath>{math`0 = (x^2 - 4)(x + 1)`}</BlockMath>
                </ProblemDescription>
                <ProblemCheck label="Корни уравнения" hint="Через запятую" set={[-2, 2, -1]} />
                <ProblemHint>Два множителя в правой части приводят к двум под-уравнениям.</ProblemHint>
                <ProblemHint>Первое под-уравнение имеет два корня.</ProblemHint>
                <ProblemAnswer>
                    <M>-2</M>, <M>2</M> и <M>-1</M>
                </ProblemAnswer>
                <ProblemSolution>
                    <P>
                        В правой части уравнения имеем два множителя, каждый из которых даёт корень для исходного
                        уравнения. Корень из второго множителя получается элементарно, он равен <M>-1</M>. А для
                        получения корня из первого множителя, нужно решить уравнение:
                    </P>
                    <BlockMath>{math`x^2 - 4 = 0`}</BlockMath>
                    <P>
                        Чтобы <M>x^2</M> осталось в одиночестве, надо избавиться от вычитания <M>4</M>. Для этого по{' '}
                        <Dep to={sameActionRule}>правилу</Dep> одинакового действия прибавим <M>4</M> к обеим частям
                        уравнения:
                    </P>
                    <BlockMath>{math`
                        \brand{+ 4} \ | \ x^2 - 4 = 0 \ | \ \brand{+ 4} \\
                        \cancel{4} + x^2 - \cancel{4} = 0 + 4 \\
                        x^2 = 4
                    `}</BlockMath>
                    <P>
                        Какое число в квадрате даёт <M>4</M>? Таких чисел два: <M>2</M> и <M>-2</M>.
                    </P>
                    <P>
                        Получается, у исходного уравнения три корня: <M>-1</M>, <M>2</M> и <M>-2</M>.
                    </P>
                </ProblemSolution>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <P>Решите уравнение:</P>
                    <BlockMath>{math`\frac{\left(x + \frac{1}{2}\right)x}{17} = 0`}</BlockMath>
                </ProblemDescription>
                <ProblemCheck label="Корни уравнения" hint="Через запятую" set={[0, [-0.5, '-1/2']]} />
                <ProblemHint>
                    Сначала избавьтесь от знаменателя <M>17</M>. Затем решите под-уравнения для каждого множителя.
                </ProblemHint>
                <ProblemAnswer>
                    <M>0</M> и <M>{math`-\frac{1}{2}`}</M>
                </ProblemAnswer>
                <ProblemSolution>
                    <P>
                        Чтобы избавиться от знаменателя дроби, по <Dep to={sameActionRule}>правилу</Dep> одинакового
                        действия умножим обе части уравнения на <M>17</M>. Тогда в левой части <M>17</M> и <M>17</M>{' '}
                        сократятся:
                    </P>
                    <BlockMath>{math`
                        \brand{\cdot 17} \ | \ \frac{\left(x + \frac{1}{2}\right)x}{17} = 0 \ | \ \brand{\cdot 17} \\
                        \cancel{17}\cdot\frac{\left(x + \frac{1}{2}\right)x}{\cancel{17}} = 0\cdot 17 \\
                        \left(x + \frac{1}{2}\right)x = 0
                    `}</BlockMath>
                    <P>
                        Имеем два множителя, каждый из которых даёт корень для исходного уравнения. Корень из второго
                        множителя получается элементарно, он равен <M>0</M>. А для получения корня из первого множителя,
                        достаточно решить тривиальное уравнение:
                    </P>
                    <BlockMath>{math`
                        x + \frac{1}{2} = 0 \\
                        \brand{- \frac{1}{2}} \ | \ x + \frac{1}{2} = 0 \ | \ \brand{- \frac{1}{2}} \\
                        -\cancel{\frac{1}{2}} + x + \cancel{\frac{1}{2}} = 0 - \frac{1}{2} \\
                        \boxed{x = -\frac{1}{2}}
                    `}</BlockMath>
                    <P>
                        Итак, у исходного уравнения два корня: <M>0</M> и <M>{math`-\frac{1}{2}`}</M>.
                    </P>
                </ProblemSolution>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <P>Решите уравнение:</P>
                    <BlockMath>{math`(x+11)(x-1) + 12 = 12`}</BlockMath>
                </ProblemDescription>
                <ProblemCheck label="Корни уравнения" hint="Через запятую" set={[-11, 1]} />
                <ProblemHint>
                    Подумайте, как можно одним действием избавиться от <M>12</M> в обеих частях уравнения.
                </ProblemHint>
                <ProblemAnswer>
                    <M>-11</M> и <M>1</M>
                </ProblemAnswer>
                <ProblemSolution>
                    <P>
                        У нас и слева, и справа от знака "равно" стоят одинаковые числа <M>12</M>. Мы можем сильно
                        упростить уравнение, если по <Dep to={sameActionRule}>правилу</Dep> одинакового действия вычтем{' '}
                        <M>12</M> из обеих частей уравнения:
                    </P>
                    <BlockMath>{math`
                        \brand{- 12} \ | \ (x+11)(x-1) + 12 = 12 \ | \ \brand{- 12} \\
                        -\cancel{12} + (x+11)(x-1) + \cancel{12} = \cancel{12} - \cancel{12} \\
                        (x+11)(x-1) = 0
                    `}</BlockMath>
                    <P>Дальше уже всё как обычно. Решаем два под-уравнения и получаем два корня:</P>
                    <BlockMath>{math`
                        \def\arraystretch{1.5}
                        \begin{array}{cc}
                            \text{\small Под-уравнение 1} & \text{\small Под-уравнение 2} \\
                            x + 11 = 0 & x - 1 = 0 \\
                            \boxed{x = -11} & \boxed{x = 1}
                        \end{array}
                    `}</BlockMath>
                </ProblemSolution>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <P>Решите уравнение:</P>
                    <BlockMath>{math`7x^2 = 42x`}</BlockMath>
                </ProblemDescription>
                <ProblemCheck label="Корни уравнения" hint="Через запятую" set={[0, 6]} />
                <ProblemHint>Упростите уравнение.</ProblemHint>
                <ProblemHint>Сгруппируйте иксы в одной части, например, в левой.</ProblemHint>
                <ProblemHint>Вынесите общий множитель за скобки.</ProblemHint>
                <ProblemAnswer>
                    <M>0</M> и <M>6</M>
                </ProblemAnswer>
                <ProblemSolution>
                    <P>
                        Для начала упростим уравнение, по <Dep to={sameActionRule}>правилу</Dep> одинакового действия
                        разделив обе части на <M>7</M>:
                    </P>
                    <BlockMath>{math`
                        \brand{\div 7} \ | \ 7x^2 = 42x \ | \ \brand{\div 7} \\
                        \frac{\cancel{7}x^2}{\cancel{7}} = \frac{42x}{7} \\
                        x^2 = 6x
                    `}</BlockMath>
                    <P>
                        Сгруппируем иксы в левой части уравнения. Для этого от <M>6x</M> в правой части надо избавиться.
                        Чтобы это сделать, по правилу одинакового действия вычтем <M>6x</M> из обеих частей уравнения:
                    </P>
                    <BlockMath>{math`
                        \brand{- 6x} \ | \ x^2 = 6x \ | \ \brand{- 6x} \\
                        x^2 - 6x = \cancel{6x} - \cancel{6x} \\
                        x^2 - 6x = 0
                    `}</BlockMath>
                    <P>
                        В левой части у обоих слагаемых есть общий множитель <M>x</M>. Его можно вынести за скобки:
                    </P>
                    <BlockMath>{math`x(x-6) = 0`}</BlockMath>
                    <P>
                        Имеем произведение двух множителей, которое равно нулю. Значит левую часть уравнения можно
                        разбить на два под-уравнения:
                    </P>
                    <BlockMath>{math`
                        \def\arraystretch{1.5}
                        \begin{array}{cc}
                            \text{\small Под-уравнение 1} & \text{\small Под-уравнение 2} \\
                            \boxed{x = 0} & x - 6 = 0 \\
                            & \boxed{x = 6}
                        \end{array}
                    `}</BlockMath>
                </ProblemSolution>
            </SubProblem>
        </Problems>

        <Problems $={uniques.fractionsFlip} title="Дроби-перевертыши" level="medium" method>
            <SubProblem label="Образец">
                <ProblemDescription>
                    <P>
                        Говоря о нестандартных действиях над равенствами, школьники и студенты любят пользоваться так
                        называемым "переворотом дробей". Действие это заключается в том, что числитель и знаменатель
                        дробей слева и справа от знака "равно" меняются местами. Например:
                    </P>
                    <BlockMath>{math`\frac{3}{x+2} = \frac{2}{4} \quad \Rightarrow \quad \frac{x+2}{3} = \frac{4}{2}`}</BlockMath>
                    <P>
                        Решите это уравнение до конца и подстановкой убедитесь, что полученный корень действительно
                        верный.
                    </P>
                </ProblemDescription>
                <ProblemCheck answer={4} />
                <ProblemSolution>
                    <BlockMath>{math`\frac{x+2}{3} = \frac{4}{2}`}</BlockMath>
                    <P>
                        Сейчас переменной <M>x</M> мешает сложение с <M>2</M> и деление на <M>3</M>. Сначала избавимся
                        от деления на <M>3</M>. Для этого по <Dep to={sameActionRule}>правилу</Dep> одинакового действия
                        умножим обе части уравнения на <M>3</M>. Тогда в левой части <M>3</M> и <M>3</M> сократятся, и
                        там останется только <M>x + 2</M>:
                    </P>
                    <BlockMath>{math`
                        \brand{\cdot \ 3} \ | \ \frac{x+2}{3} = \frac{4}{2} \ | \ \brand{\cdot 3} \\
                        \cancel{3} \cdot \frac{x+2}{\cancel{3}} = 3 \cdot \frac{4}{2} \\
                        x + 2 = 6
                    `}</BlockMath>
                    <P>
                        Теперь переменной <M>x</M> мешает только сложение с <M>2</M>. Чтобы избавиться от него, вычтем
                        <M>2</M> из обеих частей уравнения. Тогда в левой части <M>+2</M> и <M>-2</M> взаимно
                        уничтожатся (в сумме получается <M>0</M>), и там останется только <M>x</M>:
                    </P>
                    <BlockMath>{math`
                        \brand{- 2} \ | \ x + 2 = 6 \ | \ \brand{- 2} \\
                        x + \cancel{2} - \cancel{2} = 6 - 2 \\
                        \boxed{x = 4}
                    `}</BlockMath>
                    <P>
                        Проверим, действительно ли число <M>4</M> является решением исходного уравнения еще до
                        "переворота дробей":
                    </P>
                    <BlockMath>{math`
                        \frac{3}{4+2} = \frac{2}{4} \\
                        \frac{3}{6} = \frac{2}{4} \\
                        \frac{1}{2} = \frac{1}{2}
                    `}</BlockMath>
                    <P>
                        Получили истинное равенство, значит, <M>4</M> действительно является решением уравнения! Метод
                        "переворот дробей" сработал!
                    </P>
                </ProblemSolution>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <P>
                        Решите уравнение двумя способами, сначала элементарными действиями, а потом при помощи
                        "переворота дробей":
                    </P>
                    <BlockMath>{math`\frac{1}{x+1} = \frac{2}{3}`}</BlockMath>
                </ProblemDescription>
                <ProblemCheck answers={['0.5', '1/2']} />
                <ProblemSolution>
                    <P>
                        <B>Решение элементарными действиями:</B>
                    </P>
                    <P>
                        Нам неудобно, когда <M>x</M> находится внизу. Поэтому его надо вытащить оттуда. Чтобы это
                        сделать, по <Dep to={sameActionRule}>правилу</Dep> одинакового действия умножим обе части
                        уравнения на <M>x + 1</M>:
                    </P>
                    <BlockMath>{math`
                        \brand{\cdot (x + 1)} \ | \ \frac{1}{x+1} = \frac{2}{3} \ | \ \brand{\cdot (x + 1)} \\
                        \cancel{(x + 1)} \cdot \frac{1}{\cancel{x+1}} = \frac{2}{3} \cdot (x + 1) \\
                        1 = \frac{2(x + 1)}{3}
                    `}</BlockMath>
                    <P>
                        Теперь начинаем "разгружать" правую часть. Для начала умножим обе части уравнения на <M>3</M>,
                        что позволит нам избавиться от знаменателя:
                    </P>
                    <BlockMath>{math`
                        \brand{\cdot 3} \ | \ 1 = \frac{2(x + 1)}{3} \ | \ \brand{\cdot 3} \\
                        3 \cdot 1 = \frac{2(x + 1)}{\cancel{3}} \cdot \cancel{3} \\
                        3 = 2(x + 1)
                    `}</BlockMath>
                    <P>
                        Теперь избавимся от умножения на <M>2</M>. Для этого разделим обе части уравнения на <M>2</M>:
                    </P>
                    <BlockMath>{math`
                        \brand{\div 2} \ | \ 3 = 2(x + 1) \ | \ \brand{\div 2} \\
                        \frac{3}{2} = \frac{\cancel{2}(x + 1)}{\cancel{2}} \\
                        \frac{3}{2} = x + 1
                    `}</BlockMath>
                    <P>
                        Наконец, чтобы <M>x</M> остался в одиночестве, надо избавиться от сложения с <M>1</M>. Для этого
                        из обеих частей уравнения вычтем <M>1</M>:
                    </P>
                    <BlockMath>{math`
                        \brand{- 1} \ | \ \frac{3}{2} = x + 1 \ | \ \brand{- 1} \\
                        \frac{3}{2} - 1 = x + \cancel{1} - \cancel{1} \\
                        \frac{3}{2} - \frac{2}{2} = x \\
                        \boxed{\frac{1}{2} = x}
                    `}</BlockMath>
                    <P>Итак, используя элементарные действия, мы за 4 шага пришли к ответу.</P>
                    <P>
                        <B>Решение переворотом дробей:</B>
                    </P>
                    <P>Переворачиваем дроби по обе стороны от знака "равно":</P>
                    <BlockMath>{math`\frac{x+1}{1} = \frac{3}{2} \\ x+1 = \frac{3}{2}`}</BlockMath>
                    <P>
                        Чтобы <M>x</M> остался в одиночестве, надо избавиться от сложения с <M>1</M>. Для этого по{' '}
                        <Dep to={sameActionRule}>правилу</Dep> одинакового действия вычтем <M>1</M> из обеих частей
                        уравнения:
                    </P>
                    <BlockMath>{math`
                        \brand{- 1} \ | \ x + 1 = \frac{3}{2} \ | \ \brand{- 1} \\
                        x + \cancel{1} - \cancel{1} = \frac{3}{2} - 1 \\
                        x = \frac{3}{2} - \frac{2}{2} \\
                        \boxed{x = \frac{1}{2}}
                    `}</BlockMath>
                    <P>Всего лишь два шага потребовалось для решения с использованием "переворота дробей"!</P>
                </ProblemSolution>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <P>
                        Решите уравнение двумя способами, сначала элементарными действиями, а потом при помощи
                        "переворота дробей":
                    </P>
                    <BlockMath>{math`-\frac{3}{10-x} = \frac{4}{-8}`}</BlockMath>
                </ProblemDescription>
                <ProblemCheck answer={4} />
                <ProblemSolution>
                    <P>
                        <B>Решение элементарными действиями:</B>
                    </P>
                    <P>
                        Умножаем обе части уравнения на <M>-1</M>, чтобы избавиться от минусов в обеих частях:
                    </P>
                    <BlockMath>{math`
                        \brand{\cdot (-1)} \ | \ -\frac{3}{10-x} = \frac{4}{-8} \ | \ \brand{\cdot (-1)} \\
                        (-1) \cdot (-1) \cdot \frac{3}{10-x} = (-1) \cdot (-1) \cdot \frac{4}{8} \\
                        \frac{3}{10-x} = \frac{4}{8}
                    `}</BlockMath>
                    <P>
                        В правой части проводим сокращение дроби на <M>4</M>:
                    </P>
                    <BlockMath>{math`\frac{3}{10 - x} = \frac{1}{2}`}</BlockMath>
                    <P>
                        Сразу выведем эту двойку из знаменателя, по <Dep to={sameActionRule}>правилу</Dep> одинакового
                        действия умножив обе части уравнения на <M>2</M>:
                    </P>
                    <BlockMath>{math`
                        \brand{\cdot 2} \ | \ \frac{3}{10 - x} = \frac{1}{2} \ | \ \brand{\cdot 2} \\
                        2 \cdot \frac{3}{10 - x} = \frac{1}{\cancel{2}}\cdot\cancel{2} \\
                        \frac{6}{10 - x} = 1
                    `}</BlockMath>
                    <P>
                        Теперь вытащим <M>x</M> из знаменателя, умножив обе части уравнения на <M>10 - x</M>:
                    </P>
                    <BlockMath>{math`
                        \brand{\cdot (10 - x)} \ | \ \frac{6}{10 - x} = 1 \ | \ \brand{\cdot (10 - x)} \\
                        \cancel{(10-x)} \cdot \frac{6}{\cancel{10-x}} = 1 \cdot (10 - x) \\
                        6 = 10 - x
                    `}</BlockMath>
                    <P>
                        Чтобы <M>x</M> остался в одиночестве, надо избавиться от <M>10</M>. Для этого по{' '}
                        <Dep to={sameActionRule}>правилу</Dep> одинакового действия вычтем <M>10</M> из обеих частей
                        уравнения:
                    </P>
                    <BlockMath>{math`
                        \brand{- 10} \ | \ 6 = 10 - x \ | \ \brand{- 10} \\
                        -10 + 6= \cancel{10} - x - \cancel{10} \\
                        -4 = -x
                    `}</BlockMath>
                    <P>
                        Еще раз умножаем обе части уравнения на <M>-1</M>, чтобы избавиться от минусов:
                    </P>
                    <BlockMath>{math`
                        \brand{\cdot (-1)} \ | \ -4 = -x \ | \ \brand{\cdot (-1)} \\
                        (-1) \cdot (-1) \cdot 4 = (-1) \cdot (-1) \cdot x \\
                        \boxed{4 = x}
                    `}</BlockMath>
                    <P>
                        <B>Решение переворотом:</B>
                    </P>
                    <P>
                        Видим, что <M>x</M> находится внизу. Это неудобно. Поэтому по{' '}
                        <Dep to={sameActionRule}>правилу</Dep> одинакового действия применим "переворот дробей" к обеим
                        частям уравнения:
                    </P>
                    <BlockMath>{math`-\frac{10-x}{3} = \frac{-8}{4}`}</BlockMath>
                    <P>
                        Переменной <M>x</M> мешает <M>10</M> и деление на <M>3</M>. Сначала избавимся от деления на{' '}
                        <M>3</M>. Для этого по правилу одинакового действия умножим обе части уравнения на <M>3</M>.
                        Тогда в левой части <M>3</M> и <M>3</M> сократятся, и там останется только <M>10 - x</M>:
                    </P>
                    <BlockMath>{math`
                        \brand{\cdot \ 3} \ | \ -\frac{10-x}{3} = \frac{-8}{4} \ | \ \brand{\cdot 3} \\
                        \cancel{3} \cdot (-1) \cdot \frac{10-x}{\cancel{3}} = 3 \cdot \frac{-8}{4} \\
                        -(10 - x) = -6 \\
                        -10 + x = -6
                    `}</BlockMath>
                    <P>
                        Теперь переменной <M>x</M> мешает только сложение с <M>-10</M>. Чтобы избавиться от него,
                        прибавим <M>10</M> к обеим частям уравнения. Тогда в левой части <M>-10</M> и <M>+10</M> взаимно
                        уничтожатся (в сумме получается <M>0</M>), и там останется только <M>x</M>:
                    </P>
                    <BlockMath>{math`
                        \brand{+ 10} \ | \ -10 + x = -6 \ | \ \brand{+ 10} \\
                        \cancel{10} + (-\cancel{10}) + x = -6 + 10 \\
                        \boxed{x = 4}
                    `}</BlockMath>
                </ProblemSolution>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <P>
                        Решите уравнение двумя способами, сначала элементарными действиями, а потом при помощи
                        "переворота дробей":
                    </P>
                    <BlockMath>{math`\frac{1}{x-1} = \frac{2}{x + 2}`}</BlockMath>
                </ProblemDescription>
                <ProblemCheck answer={4} />
                <ProblemSolution>
                    <P>
                        <B>Решение элементарными действиями:</B>
                    </P>
                    <P>
                        Сначала вытащим наверх <M>x</M> из знаменателя левой дроби. Для этого по{' '}
                        <Dep to={sameActionRule}>правилу</Dep> одинакового действия умножим обе части уравнения на{' '}
                        <M>x - 1</M>:
                    </P>
                    <BlockMath>{math`
                        \brand{\cdot (x - 1)} \ | \ \frac{1}{x-1} = \frac{2}{x + 2} \ | \ \brand{\cdot (x - 1)} \\
                        \cancel{(x - 1)} \cdot \frac{1}{\cancel{x-1}} = \frac{2}{x + 2} \cdot (x - 1) \\
                        1 = \frac{2(x - 1)}{x + 2}
                    `}</BlockMath>
                    <P>
                        Теперь вытащим наверх <M>x</M> из знаменателя правой дроби. Для этого умножим обе части
                        уравнения на <M>x + 2</M>:
                    </P>
                    <BlockMath>{math`
                        \brand{\cdot (x + 2)} \ | \ 1 = \frac{2(x - 1)}{x + 2} \ | \ \brand{\cdot (x + 2)} \\
                        (x + 2) \cdot 1 = \frac{2(x - 1)}{\cancel{x + 2}} \cdot \cancel{x + 2} \\
                        x + 2 = 2(x - 1)
                    `}</BlockMath>
                    <P>Раскроем скобки справа:</P>
                    <BlockMath>{math`x+2 = 2x - 2`}</BlockMath>
                    <P>
                        Теперь сгруппируем <M>x</M> в правой части уравнения. Для этого избавимся от <M>x</M> в левой
                        части. Чтобы это сделать, вычтем <M>x</M> из обеих частей уравнения:
                    </P>
                    <BlockMath>{math`
                        \brand{- x} \ | \ x + 2 = 2x - 2 \ | \ \brand{- x} \\
                        -\cancel{x} + \cancel{x} + 2 = 2x - 2 - x \\
                        2 = x - 2
                    `}</BlockMath>
                    <P>
                        Наконец, чтобы <M>x</M> остался в одиночестве, надо избавиться от <M>-2</M>. Для этого прибавим{' '}
                        <M>2</M> к обеим частям уравнения:
                    </P>
                    <BlockMath>{math`
                        \brand{+ 2} \ | \ 2 = x - 2 \ | \ \brand{+ 2} \\
                        \cancel{2} + 2 = x - \cancel{2} + \cancel{2} \\
                        \boxed{4 = x}
                    `}</BlockMath>

                    <P>
                        <B>Решение переворотом дробей:</B>
                    </P>
                    <P>
                        По <Dep to={sameActionRule}>правилу</Dep> одинакового действия применим "переворот дробей" к
                        обеим частям уравнения:
                    </P>
                    <BlockMath>{math`x - 1 = \frac{x+2}{2}`}</BlockMath>
                    <P>
                        Избавимся от <M>2</M> в знаменателе, умножив обе части уравнения на <M>2</M>:
                    </P>
                    <BlockMath>{math`
                        \brand{\cdot 2} \ | \ x - 1 = \frac{x+2}{2} \ | \ \brand{\cdot 2} \\
                        2(x - 1) = \frac{x + 2}{\cancel{2}} \cdot \cancel{2} \\
                        2x - 2 = x + 2
                    `}</BlockMath>
                    <P>
                        Сгруппируем <M>x</M> в левой части уравнения. Для этого избавимся от <M>x</M> в правой части.
                        Чтобы это сделать, вычтем <M>x</M> из обеих частей уравнения:
                    </P>
                    <BlockMath>{math`
                        \brand{- x} \ | \ 2x - 2 = x + 2 \ | \ \brand{- x} \\
                        -x + 2x - 2 = \cancel{x} + 2 - \cancel{x} \\
                        x - 2 = 2
                    `}</BlockMath>
                    <P>
                        Наконец, чтобы <M>x</M> остался в одиночестве, надо избавиться от <M>-2</M>. Для этого прибавим{' '}
                        <M>2</M> к обеим частям уравнения:
                    </P>
                    <BlockMath>{math`
                        \brand{+ 2} \ | \ x - 2 = 2 \ | \ \brand{+ 2} \\
                        x - \cancel{2} + \cancel{2} = 2 + 2 \\
                        \boxed{x = 4}
                    `}</BlockMath>
                </ProblemSolution>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <P>Решите уравнение при помощи "переворота дробей":</P>
                    <BlockMath>{math`\frac{1}{x-15} = \frac{4}{4x+9}`}</BlockMath>
                </ProblemDescription>
                <ProblemAnswer>Решений у этого уравнения нет.</ProblemAnswer>
                <ProblemSolution>
                    <P>
                        С обеих сторон уравнения дроби и <M>x</M> находятся внизу. Это неудобно. Поэтому по{' '}
                        <Dep to={sameActionRule}>правилу</Dep> одинакового действия применим "переворот дробей" к обеим
                        частям уравнения:
                    </P>
                    <BlockMath>{math`\frac{x-15}{1} = \frac{4x+9}{4}`}</BlockMath>
                    <P>
                        Справа у нас дробь со знаменателем <M>4</M>. Чтобы избавиться от деления на <M>4</M>, умножим
                        обе части уравнения на <M>4</M>. Тогда в правой части <M>4</M> и <M>4</M> сократятся, и там
                        останется только <M>x + 9</M>. Не забываем про <Dep to={alwaysGlobal}>глобальность</Dep>{' '}
                        действия и левую часть заключаем в скобки:
                    </P>
                    <BlockMath>{math`
                        \brand{\cdot \ 4} \ | \ \frac{x-15}{1} = \frac{4x+9}{4} \ | \ \brand{\cdot 4} \\
                        4 \cdot \frac{x-15}{1} = \frac{4x+9}{\cancel{4}} \cdot \cancel{4} \\
                        4(x - 15) = 4x + 9 \\
                        4x - 60 = 4x + 9
                    `}</BlockMath>
                    <P>
                        Сгруппируеум <M>x</M> в какой-то одной части уравнения, например, в левой. Тогда надо избавиться
                        от <M>4x</M> в правой части. Для этого вычтем <M>4x</M> из обеих частей уравнения.
                    </P>
                    <BlockMath>{math`
                        \brand{- 4x} \ | \ 4x - 60 = 4x + 9 \ | \ \brand{- 4x} \\
                        -\cancel{4x} + \cancel{4x} - 60 = \cancel{4x} + 9 - \cancel{4x} \\
                        -60 = 9
                    `}</BlockMath>
                    <P>
                        Так получилось, что переменная вообще исчезла из уравнения. Осталось только ложное равенство{' '}
                        <M>-60 = 9</M>, в котором, как оказалось, <M>x</M> ни на что не влияет. Какое бы число мы не
                        подставили заместо <M>x</M>, проведя все изложенные выше действия мы неизбежно придем к ложному
                        равенству. Любое число не будет корнем этого уравнения. Решений у этого уравнения нет.
                    </P>
                </ProblemSolution>
            </SubProblem>
        </Problems>

        <Problem title="Тайна дробей-перевертышей" level="medium">
            <ProblemDescription>
                <P>
                    Чтобы решить уравнение, Таня решила воспользоваться приемом{' '}
                    <Dep to={uniques.fractionsFlip}>переворота дробей</Dep>:
                </P>
                <BlockMath>{math`\frac{1}{x} + \frac{1}{3} = \frac{2}{8} \quad \Rightarrow \quad x + 3 = \frac{8}{2}`}</BlockMath>
                <P>
                    Правильно ли она поступила? Если нет, подробно объясните, что пошло не так и решите уравнение
                    правильно.
                </P>
            </ProblemDescription>
            <ProblemHint>
                "Переворот дробей" действительно работает, но был использован неправильно в данном примере.
            </ProblemHint>
            <ProblemHint>
                Был нарушен <Dep to={alwaysGlobal}>принцип</Dep> "глобальности" действия.
            </ProblemHint>
            <ProblemHint>
                Вместо переворота всей левой части <B>как единого целого</B> были перевернуты две дроби внутри этой
                части, что <B>не одно и то же</B>!
            </ProblemHint>
            <ProblemSolution>
                <P>
                    <B>Обнаружение ошибки:</B>
                </P>
                <P>Закончим решение уравнения, используя действие "переворот дробей":</P>
                <BlockMath>{math`\frac{1}{x} + \frac{1}{3} = \frac{2}{8} \quad \Rightarrow \quad x + 3 = \frac{8}{2}`}</BlockMath>
                <P>
                    В левой части переменной <M>x</M> мешает сложение с <M>3</M>. Чтобы избавиться от него, вычтем{' '}
                    <M>3</M> из обеих частей уравнения. Тогда в левой части <M>+3</M> и <M>-3</M> взаимно уничтожатся (в
                    сумме получается <M>0</M>), и там останется только <M>x</M>:
                </P>
                <BlockMath>{math`
                    x + 3 = \frac{8}{2} \\
                    \brand{- 3} \ | \ x + 3 = \frac{8}{2} \ | \ \brand{- 3} \\
                    x + \cancel{3} - \cancel{3} = \frac{8}{2} - 3 \\
                    x = 4 - 3 \\
                    \boxed{x = 1}
                `}</BlockMath>
                <P>
                    Итак, если решать уравнение с "переворотом дробей", то корнем будет число <M>1</M>. Однако, если мы
                    подставим <M>1</M> в исходное уравнение, то получим ложное равенство!
                </P>
                <BlockMath>{math`
                    \frac{1}{1} + \frac{1}{3} = \frac{2}{8} \\
                    1 + \frac{1}{3} = \frac{2}{8} \\
                `}</BlockMath>
                <P>
                    В левой части у нас число больше <M>1</M>, а в правой правильная дробь, то есть число меньше{' '}
                    <M>1</M>.
                </P>

                <P>
                    <B>Правильный переворот дробей:</B>
                </P>
                <P>
                    Когда мы совершаем действие над частью равенства, мы должны применить его ко всей части как{' '}
                    <Dep to={alwaysGlobal}>единому целому</Dep>! В правой части действие применено правильно и дробь{' '}
                    <M>
                        \frac{2}
                        {8}
                    </M>{' '}
                    превращается в{' '}
                    <M>
                        \frac{8}
                        {2}
                    </M>
                    . А вот слева правильное применение правила выглядело бы вот так:
                </P>
                <BlockMath>{math`\frac{1}{\frac{1}{3} + \frac{1}{x}} = \frac{8}{2}`}</BlockMath>
                <P>
                    То есть перевернута <B>вся левая часть</B> как одна большая дробь, а не составляющие ее дроби!
                    Доведем решение до конца. Слева снизу приводим дроби к общему знаменателю и выполняем деление
                    дробей:
                </P>
                <BlockMath>{math`
                    \frac{1}{\frac{1}{3} + \frac{1}{x}} = \frac{8}{2} \\
                    \frac{1}{\frac{x + 3}{3x}} = \frac{8}{2} \\
                    \frac{3x}{x + 3} = \frac{8}{2}
                `}</BlockMath>
                <P>
                    Неудобно, когда <M>x + 3</M> находится в знаменателе. Чтобы его оттуда "вытащить", умножим обе части
                    уравнения на <M>x + 3</M>. Тогда в левой части <M>x + 3</M> и <M>x + 3</M> сократятся, и там
                    останется только <M>3x</M>:
                </P>
                <BlockMath>{math`
                    \brand{\cdot (x + 3)} \ | \ \frac{3x}{x + 3} = \frac{8}{2} \ | \ \brand{\cdot (x + 3)} \\
                    \frac{3x\cdot\cancel{(x+3)}}{\cancel{x+3}} = \frac{8}{2} \cdot (x + 3) \\
                    3x = 4(x + 3) \\
                    3x = 4x + 12
                `}</BlockMath>
                <P>
                    Сгруппируем <M>x</M> в левой части. Для этого вычтем <M>4x</M> из обеих частей уравнения. Тогда в
                    правой части <M>4x</M> и <M>-4x</M> взаимно уничтожатся (в сумме получается <M>0</M>), и там
                    останется только <M>12</M>:
                </P>
                <BlockMath>{math`
                    \brand{- 4x} \ | \ 3x = 4x + 12 \ | \ \brand{- 4x} \\
                    3x - \cancel{4x} = \cancel{4x} + 12 - \cancel{4x} \\
                    -x = 12
                `}</BlockMath>
                <P>
                    Умножим обе части на <M>-1</M> и получаем ответ:
                </P>
                <BlockMath>{math`
                    \brand{\cdot \ (-1)} \ | \ -x = 12 \ | \ \brand{\cdot (-1)} \\
                    (-1) \cdot (-1) \cdot 4 = (-1) \cdot (-1) \cdot x \\
                    \boxed{x = -12}
                `}</BlockMath>
            </ProblemSolution>
        </Problem>

        <Problem title="Полная противоположность" level="medium">
            <ProblemDescription>
                <P>
                    При каком значении <M>p</M> выражения <M>3p-1</M> и <M>5(p + 5)</M> будут противоположными числами?
                    Найдите эти противоположные числа.
                </P>
            </ProblemDescription>
            <ProblemCheck answers={['-3', '-10', '10']} />
            <ProblemHint>
                Противоположные числа -- числа, отличающиеся только знаком. Значит из одного можно получить другое,
                просто умножив его на <M>-1</M>.
            </ProblemHint>
            <ProblemHint>Составьте истинное равенство из этих двух выражений.</ProblemHint>
            <ProblemAnswer>
                При <M>p = -3</M> выражения <M>3p-1</M> и <M>5(p + 5)</M> будут противоположными числами <M>-10</M> и{' '}
                <M>10</M> соответственно.
            </ProblemAnswer>
            <ProblemSolution>
                <P>
                    Противоположные числа -- числа, отличающиеся только знаком. Значит из одного можно получить другое,
                    просто умножив его на <M>-1</M>. Например, если мы число <M>3p-1</M> умножим на <M>-1</M>, то должно
                    получиться число <M>5(p + 5)</M>. Из этого можно составить истинное равенство:
                </P>
                <BlockMath>{math`
                    (-1) \cdot (3p - 1) = 5(p + 5) \\
                    -3p + 1 = 5(p + 5) \\
                `}</BlockMath>
                <P>Теперь осталось только решить уравнение! Сначала раскроем скобки в правой части уравнения:</P>
                <BlockMath>{math`-3p + 1 = 5p + 25`}</BlockMath>
                <P>
                    Сгруппируем <M>p</M> в правой части уравнения. Для этого надо избавиться от <M>-3p</M> в левой
                    части. Чтобы это сделать, по <Dep to={sameActionRule}>правилу</Dep> одинакового действия прибавим{' '}
                    <M>3p</M> к обеим частям уравнения:
                </P>
                <BlockMath>{math`
                    \brand{+ 3p} \ | \ -3p + 1 = 5p + 25 \ | \ \brand{+ 3p} \\
                    \cancel{3p} -\cancel{3p} + 1 = 5p + 25 + 3p \\
                    1 = 8p + 25
                `}</BlockMath>
                <P>
                    Чтобы <M>p</M> остался в одиночестве, надо избавиться от умножения на <M>8</M> и сложения с{' '}
                    <M>25</M>. Сначала избавимся от сложения с <M>25</M>. Для этого вычтем <M>25</M> из обеих частей
                    уравнения:
                </P>
                <BlockMath>{math`
                    \brand{- 25} \ | \ 1 = 8p + 25 \ | \ \brand{- 25} \\
                    -25 + 1 = 8p + \cancel{25} - \cancel{25} \\
                    -24 = 8p
                `}</BlockMath>
                <P>
                    Теперь избавимся от умножения на <M>8</M>. Для этого разделим обе части уравнения на <M>8</M>:
                </P>
                <BlockMath>{math`
                    \brand{\div 8} \ | \ -24 = 8p \ | \ \brand{\div 8} \\
                    \frac{-24}{8} = \frac{\cancel{8}p}{\cancel{8}} \\
                    \boxed{-3 = p}
                `}</BlockMath>
                <P>
                    Выполним проверку. Подставляем <M>-3</M> вместо <M>p</M> в выражения из условия:
                </P>
                <BlockMath>{math`
                    3p-1 = 3 \cdot (-3) - 1 = -9 - 1 = \boxed{-10} \\
                    5(p+5) = 5 \cdot (-3 + 5) = 5 \cdot 2 = \boxed{10}
                `}</BlockMath>
                <P>
                    Дейсвительно получили противоположные числа <M>-10</M> и <M>10</M>!
                </P>
            </ProblemSolution>
        </Problem>

        <Problem title="Никогда не угадаешь!" level="hard">
            <ProblemDescription>
                <P>
                    Решите уравнение в статье, которое использовалось в качестве примера уравнения, которое нельзя
                    решить угадыванием:
                </P>
                <BlockMath>{math`\frac{x + 743 \ 639}{28} - 18x = 2025x`}</BlockMath>
            </ProblemDescription>
            <ProblemCheck answer={13} />
            <ProblemSolution>
                <P>
                    Сначала избавимся от дроби. Для этого по <Dep to={sameActionRule}>правилу</Dep> одинакового действия
                    умножим обе части уравнения на <M>28</M>. Ни в коем случае не забываем, про{' '}
                    <Dep to={alwaysGlobal}>глобальность</Dep> этого действия, и левую часть заключаем в скобки:
                </P>
                <BlockMath>{math`
                    \brand{\cdot \ 28} \ | \ \frac{x + 743 \ 639}{28} - 18x = 2025x \ | \ \brand{\cdot 28} \\
                    28 \cdot \left( \frac{x + 743 \ 639}{28} - 18x \right) = (2025x) \cdot 28 \\
                    \cancel{28} \cdot \frac{x + 743 \ 639}{\cancel{28}} - 18x \cdot 28 = 2025x \cdot 28 \\
                    x + 743 \ 639 - 504x = 56 \ 700x \\
                    743 \ 639 - 503 x = 56 \ 700x
                `}</BlockMath>
                <P>
                    Сгруппируем <M>x</M> в правой части. Для этого прибавим к обеим частям уравнения <M>503x</M>. Тогда
                    в левой части <M>-503x</M> и <M>+503x</M> взаимно уничтожатся (в сумме получается <M>0</M>), и там
                    "иксов" не останется:
                </P>
                <BlockMath>{math`
                    \brand{+ 503x} \ | \ 743 \ 639 - 503 x = 56 \ 700x \ | \ \brand{+ 503x} \\
                    743 \ 639 - \cancel{503x} + \cancel{503x} = 56 \ 700x + 503x \\
                    743 \ 639 = 57 \ 203x
                `}</BlockMath>
                <P>
                    Теперь неизвестной мешает только умножение на <M>57 \ 203</M>. Чтобы избавиться от него и оставить{' '}
                    <M>x</M> в одиночестве, разделим обе части уравнения на <M>57 \ 203</M>. Тогда в правой части можно
                    провести сокращение:
                </P>
                <BlockMath>{math`
                    \brand{\div \ 57 \ 203} \ | \ 743 \ 639 = 57 \ 203x \ | \ \brand{\div 57 \ 203} \\
                    \frac{743 \ 639}{57 \ 203} = \frac{\cancel{57 \ 203}x}{\cancel{57 \ 203}} \\
                    \boxed{13 = x}
                `}</BlockMath>
            </ProblemSolution>
        </Problem>

        <Problems title="7 раз подумай, 1 раз действуй" level="hard" method>
            <P>
                Среди предложенных действий выберите такое, которое позволит решить уравнение за меньшее число шагов.
                Подробно объясните, почему выбранное действие лучше по сравнению с другим.
            </P>
            <P>
                Если вы не знаете, какое действие выбрать, решите уравнение дважды с помощью обоих действий и тогда
                станет понятно, какое действие было эффективнее.
            </P>

            <SubProblem label="Фишка 1">
                <ProblemDescription>
                    <BlockMath>{math`3x + 2 = x`}</BlockMath>
                    <P>Действия:</P>
                    <List type="ol">
                        <Li>
                            Сгруппировать <M>x</M> в левой части уравнения.
                        </Li>
                        <Li>
                            Сгруппировать <M>x</M> в правой части уравнения.
                        </Li>
                    </List>
                </ProblemDescription>
                <ProblemHint>В левой части есть "лишнее" число, от которого придется избавляться.</ProblemHint>
                <ProblemAnswer>
                    Выгоднее сгруппировать <M>x</M> в правой части уравнения. После этого уравнение решится за одно
                    действие. Если же <M>x</M> сгруппировать слева, то придётся делать два действия.
                </ProblemAnswer>
                <ProblemSolution>
                    <P>
                        Выгоднее сгруппировать <M>x</M> в правой части уравнения, по{' '}
                        <Dep to={sameActionRule}>правилу</Dep> одинакового действия вычтя <M>3x</M> из обеих частей
                        уравнения:
                    </P>
                    <BlockMath>{math`
                        \brand{- 3x} \ | \ 3x + 2 = x \ | \ \brand{- 3x} \\
                        -\cancel{3x} + \cancel{3x} + 2 = x - 3x \\
                        2 = -2x
                    `}</BlockMath>
                    <P>
                        При таком раскладе для решения уравнения останется лишь разделить обе части на <M>-2</M> и
                        получить ответ:
                    </P>
                    <BlockMath>{math`
                        \brand{\div (-2)} \ | \ 2 = -2x \ | \ \brand{\div (-2)} \\
                        \frac{2}{-2} = \frac{\cancel{-2}x}{\cancel{-2}} \\
                        \boxed{-1 = x}
                    `}</BlockMath>
                    <P>
                        Если бы решили сгруппировать <M>x</M> в левой части уравнения, вычтя из обеих частей <M>x</M>,
                        то пришли бы к следующей ситуации:
                    </P>
                    <BlockMath>{math`
                        \brand{- x} \ | \ 3x + 2 = x \ | \ \brand{- x} \\
                        -x + 3x + 2 = \cancel{x} - \cancel{x} \\
                        2x + 2 = 0
                    `}</BlockMath>
                    <P>
                        У нас теперь всё свалено в кучу слева. Чтобы её разгрести, придётся избавляться от сложения с{' '}
                        <M>2</M>, а потом и от умножения на <M>2</M>. То есть делать два действия вместо одного, если бы
                        сгруппировали <M>x</M> в правой части!
                    </P>
                </ProblemSolution>
                <ProblemNote>
                    Важный вывод -- при решении уравнений стараемся группировать <M>x</M> там, где меньше "лишних"
                    чисел!
                </ProblemNote>
            </SubProblem>

            <SubProblem label="Фишка 2">
                <ProblemDescription>
                    <BlockMath>{math`7x - 2 = 5x + 10`}</BlockMath>
                    <P>Действия:</P>
                    <List type="ol">
                        <Li>
                            Сгруппировать <M>x</M> в левой части уравнения.
                        </Li>
                        <Li>
                            Сгруппировать <M>x</M> в правой части уравнения.
                        </Li>
                    </List>
                </ProblemDescription>
                <ProblemHint>
                    Получать отрицательный коэффициент перед <M>x</M> нежелательно.
                </ProblemHint>
                <ProblemAnswer>
                    Выгоднее сгруппировать <M>x</M> в левой части уравнения, потому что тогда коэффициент при <M>x</M>{' '}
                    получится положительным. Если же <M>x</M> сгруппировать справа, то потом придется делать лишнее
                    действие, чтобы избавиться от минуса перед <M>x</M>.
                </ProblemAnswer>
                <ProblemSolution>
                    <P>
                        Выгоднее сгруппировать <M>x</M> в левой части уравнения, по{' '}
                        <Dep to={sameActionRule}>правилу</Dep> одинакового действия вычтя <M>5x</M> из обеих частей
                        уравнения:
                    </P>
                    <BlockMath>{math`
                        \brand{- 5x} \ | \ 7x - 2 = 5x + 10 \ | \ \brand{- 5x} \\
                        -5x + 7x - 2 = \cancel{5x} + 10 - \cancel{5x} \\
                        2x - 2 = 10
                    `}</BlockMath>
                    <P>
                        Да, здесь у нас <M>2x</M> связано вычитанием <M>2</M>, но при этом коэффициент при <M>x</M>{' '}
                        положительный.
                    </P>
                    <P>
                        Если бы мы выбрали сгруппировать <M>x</M> в правой части уравнения, вычтя <M>7x</M> из обеих
                        частей уравнения, то пришли бы к следующей ситуации:
                    </P>
                    <BlockMath>{math`
                        \brand{- 7x} \ | \ 7x - 2 = 5x + 10 \ | \ \brand{- 7x} \\
                        -\cancel{7x} + \cancel{7x} - 2 = 5x + 10 - 7x \\
                        -2 = -2x + 10
                    `}</BlockMath>
                    <P>
                        Здесь <M>-2x</M> у нас тоже связано с лишним числом, с <M>10</M>, но вдобавок еще и коэффициент
                        при <M>x</M> отрицательный. Из-за этого в конце нам придется умножать обе части уравнения на{' '}
                        <M>-1</M>, чтобы избавиться от минуса перед <M>x</M>.
                    </P>
                </ProblemSolution>
                <ProblemNote>
                    Важный вывод -- если можно сильно упростить решение, отрицательный коэффициент при <M>x</M> можно и
                    потерпеть. Но если какого-то сильного упрощения добиться не выходит, то лучше избегать отрицательных
                    коэффициентов и группировать так, чтобы коэффициент при <M>x</M> был положительным.
                </ProblemNote>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`x = 8x - 3`}</BlockMath>
                    <P>Действия:</P>
                    <List type="ol">
                        <Li>
                            Сгруппировать <M>x</M> в левой части уравнения.
                        </Li>
                        <Li>
                            Сгруппировать <M>x</M> в правой части уравнения.
                        </Li>
                    </List>
                </ProblemDescription>
                <ProblemHint>Воспользуйтесь фишкой 1.</ProblemHint>
                <ProblemAnswer>
                    Выгоднее сгруппировать <M>x</M> в левой части. Тогда нам не будет мешать вычитание <M>3</M>.
                </ProblemAnswer>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`11 + 9x = 20x`}</BlockMath>
                    <P>Действия:</P>
                    <List type="ol">
                        <Li>
                            Сгруппировать <M>x</M> в левой части уравнения.
                        </Li>
                        <Li>
                            Сгруппировать <M>x</M> в правой части уравнения.
                        </Li>
                    </List>
                </ProblemDescription>
                <ProblemHint>Воспользуйтесь фишкой 1.</ProblemHint>
                <ProblemAnswer>
                    Выгоднее сгруппировать <M>x</M> в правой части. Тогда нам не будет мешать сложение с <M>11</M>.
                </ProblemAnswer>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`3x + 2 = 5x - 10`}</BlockMath>
                    <P>Действия:</P>
                    <List type="ol">
                        <Li>
                            Сгруппировать <M>x</M> в левой части уравнения.
                        </Li>
                        <Li>
                            Сгруппировать <M>x</M> в правой части уравнения.
                        </Li>
                    </List>
                </ProblemDescription>
                <ProblemHint>Воспользуйтесь фишкой 2.</ProblemHint>
                <ProblemAnswer>
                    Выгоднее сгруппировать <M>x</M> в правой части. Так мы получим положительный коэффициент при{' '}
                    <M>x</M>.
                </ProblemAnswer>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`76x + 10 = 46x - 12`}</BlockMath>
                    <P>Действия:</P>
                    <List type="ol">
                        <Li>
                            Сгруппировать <M>x</M> в левой части уравнения.
                        </Li>
                        <Li>
                            Сгруппировать <M>x</M> в правой части уравнения.
                        </Li>
                    </List>
                </ProblemDescription>
                <ProblemHint>Воспользуйтесь фишкой 2.</ProblemHint>
                <ProblemAnswer>
                    Выгоднее сгруппировать <M>x</M> в левой части. Так мы получим положительный коэффициент при <M>x</M>
                    .
                </ProblemAnswer>
            </SubProblem>
        </Problems>

        <Problems title="Продвинутые уравнения" level="hard">
            <P>Решите уравнение:</P>
            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`-4x^2 + 2x + 6 = -2x^2 + 3x -(-3 + 2x^2)`}</BlockMath>
                </ProblemDescription>
                <ProblemCheck answer={3} />
                <ProblemHint>Раскройте скобки и приведите подобные в правой части уравнения.</ProblemHint>
                <ProblemSolution>
                    <P>В правой части раскроем скобки и приведём подобные слагаемые:</P>
                    <BlockMath>{math`
                        -4x^2 + 2x + 6 = -2x^2 + 3x + 3 - 2x^2 \\
                        -4x^2 + 2x + 6 = -4x^2 + 3x + 3
                    `}</BlockMath>
                    <P>
                        Замечаем слева и справа одинаковые слагаемые <M>-4x^2</M>. Мы можем избавиться от них, по{' '}
                        <Dep to={sameActionRule}>правилу</Dep> одинакового действия, прибавив <M>4x^2</M> к обеим частям
                        уравнения:
                    </P>
                    <BlockMath>{math`
                        \brand{+ 4x^2} \ | \ -4x^2 + 2x + 6 = -4x^2 + 3x + 3 \ | \ \brand{+ 4x^2} \\
                        \cancel{4x^2} - \cancel{4x^2} + 2x + 6 = -\cancel{4x^2} + 3x + 3 + \cancel{4x^2} \\
                        2x + 6 = 3x + 3
                    `}</BlockMath>
                    <P>
                        Сгруппируем <M>x</M> в левой части. Для этого надо избавиться от <M>3x</M> в правой части. Чтобы
                        это сделать, вычтем <M>3x</M> из обеих частей уравнения:
                    </P>
                    <BlockMath>{math`
                        \brand{- 3x} \ | \ 2x + 6 = 3x + 3 \ | \ \brand{- 3x} \\
                        - 3x + 2x + 6 = \cancel{3x} + 3 - \cancel{3x} \\
                        -x + 6 = 3
                    `}</BlockMath>
                    <P>
                        Теперь <M>x</M> мешает остаться в одиночестве умножение на <M>-1</M> и сложение с <M>6</M>.
                        Сначала избавимся от сложения с <M>6</M>. Для этого вычтем <M>6</M> из обеих частей уравнения:
                    </P>
                    <BlockMath>{math`
                        \brand{- 6} \ | \ -x + 6 = 3 \ | \ \brand{- 6} \\
                        -\cancel{6} + \cancel{6} - x = 3 - 6 \\
                        -x = -3
                    `}</BlockMath>
                    <P>
                        Теперь умножим обе части уравнения на <M>-1</M>, чтобы избавиться от минуса перед <M>x</M>:
                    </P>
                    <BlockMath>{math`
                        \brand{\cdot (-1)} \ | \ -x = -3 \ | \ \brand{\cdot (-1)} \\
                        (-1) \cdot (-1)x = (-1) \cdot (-3) \\
                        \boxed{x = 3}
                    `}</BlockMath>
                </ProblemSolution>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`-\frac{5}{7}x^2 + 35 = 0`}</BlockMath>
                </ProblemDescription>
                <ProblemCheck set={[7, -7]} />
                <ProblemHint>
                    Изолируйте (оставьте в одиночестве) <M>x^2</M>.
                </ProblemHint>
                <ProblemSolution>
                    <P>
                        Будем постепенно изолировать <M>x^2</M>. Для начала по <Dep to={sameActionRule}>правилу</Dep>{' '}
                        одинакового действия вычтем <M>35</M> из обеих частей уравнения:
                    </P>
                    <BlockMath>{math`
                        \brand{- 35} \ | \ -\frac{5}{7}x^2 + 35 = 0 \ | \ \brand{- 35} \\
                        - \cancel{35} - \frac{5}{7}x^2 + \cancel{35} = 0 - 35 \\
                        -\frac{5}{7}x^2 = -35
                    `}</BlockMath>
                    <P>
                        Теперь умножим обе части уравнения на <M>-1</M>, чтобы избавиться от минусов в обеих частях:
                    </P>
                    <BlockMath>{math`
                        \brand{\cdot (-1)} \ | \ -\frac{5}{7}x^2 = -35 \ | \ \brand{\cdot (-1)} \\
                        (-1) \cdot (-1) \cdot \frac{5}{7}x^2 = (-1) \cdot (-1) \cdot 35 \\
                        \frac{5}{7}x^2 = 35
                    `}</BlockMath>
                    <P>
                        Чтобы избавиться от числителя <M>5</M> дроби в левой части, разделим обе части уравнения на{' '}
                        <M>5</M>:
                    </P>
                    <BlockMath>{math`
                        \brand{\div 5} \ | \ \frac{5}{7}x^2 = 35 \ | \ \brand{\div 5} \\
                        \frac{\cancel{5}}{\cancel{5}\cdot7}x^2 = \frac{35}{5} \\
                        \frac{x^2}{7} = 7
                    `}</BlockMath>
                    <P>
                        Теперь избавимся от деления на <M>7</M>. Для этого умножим обе части уравнения на <M>7</M>:
                    </P>
                    <BlockMath>{math`
                        \brand{\cdot 7} \ | \ \frac{x^2}{7} = 7 \ | \ \brand{\cdot 7} \\
                        \cancel{7} \cdot \frac{x^2}{\cancel{7}} = 7 \cdot 7 \\
                        x^2 = 49
                    `}</BlockMath>
                    <P>
                        Вспоминаем, какое число в квадрате даёт <M>49</M>. Это число <M>7</M>. Но <M>-7</M> тоже в
                        квадрате даёт <M>49</M>. Поэтому уравнение имеет два решения: <M>7</M> и <M>-7</M>!
                    </P>
                </ProblemSolution>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`(x+11)^2 = (x-9)^2`}</BlockMath>
                </ProblemDescription>
                <ProblemCheck answer={-1} />
                <ProblemHint>Раскройте скобки и приведите подобные слагаемые в обеих частях уравнения.</ProblemHint>
                <ProblemHint>
                    Слева используйте формулу квадрата суммы, а справа -- формулу квадрата разности.
                </ProblemHint>
                <ProblemSolution>
                    <P>Слева используем формулу квадрата суммы и приводим подобные:</P>
                    <BlockMath>{math`
                        (x + 11)^2 = (x - 9)^2 \\
                        x^2 + 2\cdot x \cdot11 + 11^2 = (x - 9)^2 \\
                        x^2 + 22x + 121 = (x - 9)^2
                    `}</BlockMath>
                    <P>Справа используем формулу квадрата разности и приводим подобные:</P>
                    <BlockMath>{math`
                        x^2 + 22x + 121 = x^2 - 2\cdot x \cdot9 + 9^2 \\
                        x^2 + 22x + 121 = x^2 - 18x + 81
                    `}</BlockMath>
                    <P>
                        Замечаем слева и справа одинаковые слагаемые <M>x^2</M>. Мы можем избавиться от них, по{' '}
                        <Dep to={sameActionRule}>правилу</Dep> одинакового действия, вычтя <M>x^2</M> из обеих частей
                        уравнения:
                    </P>
                    <BlockMath>{math`
                        \brand{- x^2} \ | \ x^2 + 22x + 121 = x^2 - 18x + 81 \ | \ \brand{- x^2} \\
                        -\cancel{x^2} + \cancel{x^2} + 22x + 121 = \cancel{x^2} - 18x + 81 -\cancel{x^2} \\
                        22x + 121 = -18x + 81
                    `}</BlockMath>
                    <P>
                        Сгруппируем <M>x</M> в левой части. Для этого надо избавиться от <M>-18x</M> в правой части.
                        Чтобы это сделать, прибавим <M>18x</M> к обеим частям уравнения:
                    </P>
                    <BlockMath>{math`
                        \brand{+ 18x} \ | \ 22x + 121 = -18x + 81 \ | \ \brand{+ 18x} \\
                        22x + 18x + 121 = -\cancel{18x} + 81 + \cancel{18x} \\
                        40x + 121 = 81
                    `}</BlockMath>
                    <P>
                        Чтобы <M>x</M> остался в одиночестве, нужно избавиться от умножения на <M>40</M> и сложения с{' '}
                        <M>121</M>. Сначала избавимся от сложения с <M>121</M>. Для этого вычтем <M>121</M> из обеих
                        частей уравнения:
                    </P>
                    <BlockMath>{math`
                        \brand{- 121} \ | \ 40x + 121 = 81 \ | \ \brand{- 121} \\
                        -\cancel{121} + \cancel{121} + 40x = 81 - 121 \\
                        40x = -40
                    `}</BlockMath>
                    <P>
                        Наконец, избавимся от умножения на <M>40</M>. Для этого разделим обе части уравнения на{' '}
                        <M>40</M>:
                    </P>
                    <BlockMath>{math`
                        \brand{\div 40} \ | \ 40x = -40 \ | \ \brand{\div 40} \\
                        \frac{\cancel{40}}{\cancel{40}}x = \frac{-40}{40} \\
                        \boxed{x = -1}
                    `}</BlockMath>
                </ProblemSolution>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`\frac{7}{3x + 8} - \frac{2}{4x - 1} = 0`}</BlockMath>
                </ProblemDescription>
                <ProblemCheck answers={['23/22']} />
                <ProblemHint>
                    Одним действием сделайте так, чтобы дроби были по обе части уравнения. Затем используйте{' '}
                    <Dep to={uniques.fractionsFlip}>переворот дробей</Dep>.
                </ProblemHint>
                <ProblemSolution>
                    <P>
                        Сделаем так, чтобы дроби были по обе части уравнения. Для этого по{' '}
                        <Dep to={sameActionRule}>правилу</Dep> одинакового действия, прибавим дробь{' '}
                        <M>{math`\frac{2}{4x - 1}`}</M> к обеим частям уравнения:
                    </P>
                    <BlockMath>{math`
                        \brand{+ \frac{2}{4x - 1}} \ | \ \frac{7}{3x + 8} - \frac{2}{4x - 1} = 0 \ | \ \brand{+ \frac{2}{4x - 1}} \\
                        \cancel{\frac{2}{4x - 1}} + \frac{7}{3x + 8} - \cancel{\frac{2}{4x - 1}} = 0 + \frac{2}{4x - 1} \\
                        \frac{7}{3x + 8} = \frac{2}{4x - 1}
                    `}</BlockMath>
                    <P>
                        Все иксы торчат в знаменателях. Непорядок, и так решать неудобно. Используем{' '}
                        <Dep to={uniques.fractionsFlip}>переворот дробей</Dep>:
                    </P>
                    <BlockMath>{math`\frac{3x + 8}{7} = \frac{4x - 1}{2}`}</BlockMath>
                    <P>
                        Избавляемся от знаменателей, умножив обе части уравнения на <M>7</M> и <M>2</M>. И не забываем
                        про <Dep to={alwaysGlobal}>глобальность</Dep> этого действия -- заключаем обе части уравнения в
                        скобки!
                    </P>
                    <BlockMath>{math`
                        \brand{\cdot 7 \cdot 2} \ | \ \frac{3x + 8}{7} = \frac{4x - 1}{2} \ | \ \brand{\cdot 7 \cdot 2} \\
                        \frac{\cancel{7}\cdot 2\cdot (3x + 8)}{\cancel{7}} = \frac{ 7\cdot\cancel{2}\cdot (4x - 1)}{\cancel{2}} \\
                        2(3x + 8) = 7(4x - 1)
                    `}</BlockMath>
                    <P>Раскрываем скобки:</P>
                    <BlockMath>{math`6x + 16 = 28x - 7`}</BlockMath>
                    <P>
                        Группируем <M>x</M> в правой части. Для этого вычитаем <M>6x</M> из обеих частей уравнения:
                    </P>
                    <BlockMath>{math`
                        \brand{- 6x} \ | \ 6x + 16 = 28x - 7 \ | \ \brand{- 6x} \\
                        -\cancel{6x} + \cancel{6x} + 16 = 28x - 7 - 6x \\
                        16 = 22x - 7
                    `}</BlockMath>
                    <P>
                        Добавляем <M>7</M> к обеим частям уравнения:
                    </P>
                    <BlockMath>{math`
                        \brand{+ 7} \ | \ 16 = 22x - 7 \ | \ \brand{+ 7} \\
                        7 + 16 = 22x - \cancel{7} + \cancel{7} \\
                        23 = 22x
                    `}</BlockMath>
                    <P>
                        Делим обе части уравнения на <M>22</M>:
                    </P>
                    <BlockMath>{math`
                        \brand{\div 22} \ | \ 23 = 22x \ | \ \brand{\div 22} \\
                        \frac{23}{22} = \frac{\cancel{22}x}{\cancel{22}} \\
                        \boxed{\frac{23}{22} = x}
                    `}</BlockMath>
                </ProblemSolution>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`(2x-5)^2 = 4x^2`}</BlockMath>
                </ProblemDescription>
                <ProblemCheck answers={['5/4', '1.25']} />
                <ProblemHint>В левой части раскройте скобки по формуле квадрата разности.</ProblemHint>
                <ProblemSolution>
                    <P>Раскрываем скобки слева по формуле квадрата разности:</P>
                    <BlockMath>{math`
                        (2x - 5)^2 = 4x^2 \\
                        (2x)^2 - 2\cdot(2x)\cdot5 + 5^2 = 4x^2 \\
                        4x^2 - 20x + 25 = 4x^2
                    `}</BlockMath>
                    <P>
                        Замечаем слева и справа одинаковые слагаемые <M>4x^2</M>. Мы можем избавиться от них, по{' '}
                        <Dep to={sameActionRule}>правилу</Dep> одинакового действия, вычтя <M>4x^2</M> из обеих частей
                        уравнения:
                    </P>
                    <BlockMath>{math`
                        \brand{- 4x^2} \ | \ 4x^2 - 20x + 25 = 4x^2 \ | \ \brand{- 4x^2} \\
                        -\cancel{4x^2} + \cancel{4x^2} - 20x + 25 = \cancel{4x^2} - \cancel{4x^2} \\
                        -20x + 25 = 0
                    `}</BlockMath>
                    <P>
                        Добавим к обеим частям уравнения <M>20x</M>:
                    </P>
                    <BlockMath>{math`
                        \brand{+ 20x} \ | \ -20x + 25 = 0 \ | \ \brand{+ 20x} \\
                        -\cancel{20x} + \cancel{20x} + 25 = 0 + 20x \\
                        25 = 20x
                    `}</BlockMath>
                    <P>
                        Наконец, делим обе части уравнения на <M>20</M>, чтобы оставить <M>x</M> в одиночестве справа:
                    </P>
                    <BlockMath>{math`
                        \brand{\div 20} \ | \ 25 = 20x \ | \ \brand{\div 20} \\
                        \frac{25}{20} = \frac{\cancel{20}x}{\cancel{20}} \\
                        \boxed{\frac{5}{4} = x}
                    `}</BlockMath>
                </ProblemSolution>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`\frac{x^2}{x-3} = 4x`}</BlockMath>
                </ProblemDescription>
                <ProblemCheck set={[0, 4]} />
                <ProblemHint>
                    Сгруппируйте все <M>x</M> в одной части уравнения и вынесите общие множители за скобки.
                </ProblemHint>
                <ProblemHint>
                    Воспользуйтесь приёмом из задачи <Dep to={uniques.zeroFactors}>Нулевые множители</Dep>.
                </ProblemHint>
                <ProblemSolution>
                    <P>
                        Вытащим <M>x-3</M> из знаменателя. Для этого по <Dep to={sameActionRule}>правилу</Dep>{' '}
                        одинакового действия, умножим обе части уравнения на <M>x-3</M>:
                    </P>
                    <BlockMath>{math`
                        \brand{\cdot (x-3)} \ | \ \frac{x^2}{x-3} = 4x \ | \ \brand{\cdot (x-3)} \\
                        \cancel{(x-3)}\cdot\frac{x^2}{\cancel{x-3}} = 4x\cdot(x-3) \\
                        x^2 = 4x^2 - 12x
                    `}</BlockMath>
                    <P>
                        Сгруппируем все иксы в правой части уравнения. Для этого вычтем <M>x^2</M> из обеих частей
                        уравнения:
                    </P>
                    <BlockMath>{math`
                        \brand{- x^2} \ | \ x^2 = 4x^2 - 12x \ | \ \brand{- x^2} \\
                        -\cancel{x^2} + \cancel{x^2} = 4x^2 - 12x - x^2 \\
                        0 = 3x^2 - 12x
                    `}</BlockMath>
                    <P>
                        Вынесем за скобки <M>3x</M>:
                    </P>
                    <BlockMath>{math`0 = 3x(x - 4)`}</BlockMath>
                    <P>
                        Получили произведение множителей, которое равно нулю, прямо как в задаче{' '}
                        <Dep to={uniques.zeroFactors}>Нулевые множители</Dep>. Значит, это уравнение разбивается на два
                        под-уравнения:
                    </P>
                    <BlockMath>{math`
                        \def\arraystretch{1.5}
                        \begin{array}{cc}
                            \text{\small Под-уравнение 1} & \text{\small Под-уравнение 2} \\
                            \boxed{x = 0} & x - 4 = 0 \\
                            & \boxed{x = 4}
                        \end{array}
                    `}</BlockMath>
                    <P>
                        Уравнение имеет два решения: <M>0</M> и <M>4</M>.
                    </P>
                </ProblemSolution>
            </SubProblem>
        </Problems>

        <Problem title="Дробный переполох" level="hard">
            <ProblemDescription>
                <P>Решите уравнение:</P>
                <BlockMath>{math`\frac{3z + 9}{6} + \frac{8z - 2}{4} = \frac{5 + 4z}{3}`}</BlockMath>
            </ProblemDescription>
            <ProblemCheck answers={['4/7']} />
            <ProblemHint>
                Наименьший общий знаменатель у этих дроблей равен <M>12</M>. Умножив обще части на <M>12</M>, все
                знаменатели сократятся.
            </ProblemHint>
            <ProblemSolution>
                <P>
                    Работать с дробями неудобно. Надо подумать, на что умножить обе части уравнения, чтобы разом
                    избавиться от дробей. Наименьший общий знаменатель у этих дробей равен <M>12</M>. Умножив по{' '}
                    <Dep to={sameActionRule}>правилу</Dep> одинакового действия обе части уравнения на <M>12</M>, все
                    дроби сократятся. Главное помнить про <Dep to={alwaysGlobal}>глобальность</Dep> этого действия --
                    левую часть заключаем в скобки!
                </P>
                <BlockMath>{math`
                    \brand{\cdot 12} \ | \ \frac{3z + 9}{6} + \frac{8z - 2}{4} = \frac{5 + 4z}{3} \ | \ \brand{\cdot 12} \\
                    12\cdot\left(\frac{3z + 9}{6} + \frac{8z - 2}{4}\right) = 12\cdot\frac{5 + 4z}{3} \\
                    12\cdot\frac{3z + 9}{6} + 12\cdot\frac{8z - 2}{4} = 12\cdot\frac{5 + 4z}{3} \\
                    2(3z + 9) + 3(8z - 2) = 4(5 + 4z)
                `}</BlockMath>
                <P>Раскрываем скобки и приводим подобные:</P>
                <BlockMath>{math`
                    6z + 18 + 24z - 6 = 20 + 16z \\
                    30z + 12 = 20 + 16z
                `}</BlockMath>
                <P>
                    Сгруппируем <M>z</M> в левой части. Для этого надо избавиться от <M>16z</M> в правой части. Чтобы
                    это сделать, вычтем <M>16z</M> из обеих частей уравнения:
                </P>
                <BlockMath>{math`
                    \brand{- 16z} \ | \ 30z + 12 = 20 + 16z \ | \ \brand{- 16z} \\
                    -16z + 30z + 12 = 20 + \cancel{16z} - \cancel{16z} \\
                    14z + 12 = 20
                `}</BlockMath>
                <P>
                    Чтобы <M>z</M> осталось в одиночестве, нужно избавиться от умножения на <M>14</M> и сложения с{' '}
                    <M>12</M>. Сначала избавимся от сложения с <M>12</M>. Для этого вычтем <M>12</M> из обеих частей
                    уравнения:
                </P>
                <BlockMath>{math`
                    \brand{- 12} \ | \ 14z + 12 = 20 \ | \ \brand{- 12} \\
                    -\cancel{12} + 14z + \cancel{12} = 20 - 12 \\
                    14z = 8
                `}</BlockMath>
                <P>
                    Наконец, избавимся от умножения на <M>14</M>. Для этого разделим обе части уравнения на <M>14</M>:
                </P>
                <BlockMath>{math`
                    \brand{\div 14} \ | \ 14z = 8 \ | \ \brand{\div 14} \\
                    \frac{\cancel{14}z}{\cancel{14}} = \frac{8}{14} \\
                    \boxed{z = \frac{4}{7}}
                `}</BlockMath>
            </ProblemSolution>
        </Problem>

        <Problem $={uniques.sameActionRuleFalse} title="Сохранение ложности равенства" level="hard">
            <ProblemDescription>
                <P>
                    В <Dep to={sameActionRule}>правиле</Dep> одинакового действия речь идёт про истинные равенства. А
                    работает ли оно для ложных равенств? Правда ли, что если над обеими частями любого ложного равенства
                    совершить одно и то же действие, то получится обязательно ложное равенство?
                </P>
            </ProblemDescription>
            <ProblemHint>
                Достаточно привести пример действия, которое из ложного равенства сделает истинное.
            </ProblemHint>
            <ProblemHint>
                Подумайте, есть ли такие действия, которые могут "уничтожить" объект, над которым они совершаются.
            </ProblemHint>
            <ProblemSolution>
                <P>
                    На первый взгляд, правило одинакового действия работает и для ложных равенств. Возьмём, например,
                    ложное равенство <M>1 + 8 = 13</M> и добавим к обеим частям <M>4</M>.
                </P>
                <BlockMath>{math`
                    \brand{+ \ 4} \ | \ 1 + 8 = 13 \ | \ \brand{+ 4} \\
                    4 + 1 + 8 = 4 + 13 \\
                    13 = 17
                `}</BlockMath>
                <P>
                    Начали с ложного равенства, закончили ложным равенством. Как будто элементарным действием это
                    правило не нарушить.
                </P>
                <ProblemSection title="Умножение на 0">
                    <P>
                        Нам нужно какое-то действие, которое может "уничтожить" информацию при применении. Одно из таких
                        действий -- умножение на <M>0</M>.
                    </P>
                    <BlockMath>{math`
                    \brand{\cdot \ 0} \ | \ 1 + 8 = 13 \ | \ \brand{\cdot 0} \\
                    0 \cdot (1 + 8) = 0 \cdot 13 \\
                    0 = 0
                `}</BlockMath>
                    <P>Начали с ложного равенства, а закончили истинным равенством.</P>
                </ProblemSection>
                <ProblemSection title="Взятие модуля">
                    Есть ещё один интересный способ из ложного равенства сделать истинное -- взять модуль от обеих
                    частей. Рассмотрим ложное равенство <M>2 = -2</M>. Если взять модуль от обеих частей, то получится
                    истинное равенство <M>|2| = |-2|</M>, потому что модуль "отбрасывает" знак числа, а <M>2</M> и{' '}
                    <M>-2</M> без знака означают один и тот же объект.
                </ProblemSection>
                <ProblemSection title="Вывод">
                    Мы привели примеры, когда правило одинакового действия не работает. Для ложных равенств его
                    использовать нельзя. Нельзя быть уверенным, что сделанное с обеих сторон ложного равенства действие
                    даст новое ложное равенство!
                </ProblemSection>
            </ProblemSolution>
        </Problem>

        <Problem $={uniques.linearRootClasses} title="Линейные корневые классы" level="hard" pretty>
            <ProblemDescription>
                <P>
                    Три уравнения ниже имеют форму <M>Ax + B = 0</M> (их называют <I>линейными</I>) и отличаются друг от
                    друга только единым множителем, на которые были умножены все коэффициенты. Все они имеют один
                    одинаковый корень{' '}
                    <M>
                        -\frac{3}
                        {2}
                    </M>
                    :
                </P>
                <BlockMath>{math`\underset{\text{Исходное}}{2x + 3 = 0} >>{big} \underset{\text{Умножено на } 2}{4x + 6 = 0} >>{big} \underset{\text{Умножено на } 3}{6x + 9 = 0}`}</BlockMath>
                <P>
                    Поделив обе части второго уравнения на <M>2</M>, а третьего на <M>3</M>, мы вновь получим исходное
                    первое уравнение. Умножив обе части второго уравнения на{' '}
                    <M>
                        \frac{3}
                        {2}
                    </M>
                    , мы получим третье уравнение. Короче, все три уравнения можно свести друг к другу умножением на
                    какое-то число.
                </P>
                <P>
                    А существуют ли два уравнения с <B>одинаковыми корнями</B>, которые невозможно свести друг к другу
                    умножением на какое-то число? Если существуют, приведите пример таких уравнений. Если не существуют,
                    строго докажите это.
                </P>
            </ProblemDescription>
            <ProblemHint>
                Вам нужно получить противоречие, чтобы доказать, что таких уравнений не существует. Предположите
                обратное, представив два несводимых друг к другу уравнения с одинаковыми корнями.
            </ProblemHint>
            <ProblemAnswer>
                Все линейные уравнения с одинаковыми корнями отличаются друг от друга только общим множителем.
            </ProblemAnswer>
            <ProblemSolution>
                <ProblemSection title="Изящный способ">
                    <P>
                        Будем доказывать от противного. Предположим, что <B>существуют</B> два несводимых друг к другу
                        линейных уравнения с одинаковым корнем:
                    </P>
                    <BlockMath>{math`A_1x + B_1 = 0 >>{big} A_2x + B_2 = 0`}</BlockMath>
                    <P>
                        Вынесем за скобки <M>A_1</M> в первом уравнении и <M>A_2</M> во втором:
                    </P>
                    <BlockMath>{math`A_1\left(x + \frac{B_1}{A_1}\right) = 0 >>{big} A_2\left(x + \frac{B_2}{A_2}\right) = 0`}</BlockMath>
                    <P>
                        Провернем небольшой финт с минусом, чтобы внутри скобок оказалась общая формула решения
                        линейного уравнения:
                    </P>
                    <BlockMath>{math`A_1\left( x - \left[-\frac{B_1}{A_1}\right] \right) = 0 >>{big} A_2\left( x - \left[ - \frac{B_2}{A_2} \right] \right) = 0`}</BlockMath>
                    <P>
                        Нам известно, что оба уравнения имеют одинаковый корень <M>x'</M>:
                    </P>
                    <BlockMath>{math`A_1(x - x') = 0 >>{big} A_2(x - x') = 0`}</BlockMath>
                    <P>
                        Видим, что эти записи друг от друга отличаются только коэффициентами <M>A_1</M> и <M>A_2</M>. Но
                        коэффициент <M>A_2</M> <B>всегда</B> можно получить из <M>A_1</M> умножением на какое-то число{' '}
                        <M>k</M>.
                    </P>
                    <BlockMath>{math`A_2 = k \cdot A_1`}</BlockMath>
                    <P>
                        Поэтому, достаточно умножить по <Dep to={sameActionRule}>правилу одинакового действия</Dep> обе
                        части левого уравнения на это самое <M>k</M> и мы получим правое уравнение:
                    </P>
                    <BlockMath>{math`
                    A_1(x - x') = 0
                    \\
                    \overbrace{\yellow{k} \cdot A_1}^{A_2}(x - x') = 0 \cdot \yellow{k}
                    \\
                    A_2(x - x') = 0
                `}</BlockMath>
                    <P>
                        Но это по сути значит, что оба изначально заявленных как "несводимых" уравнения на самом деле{' '}
                        <B>сводимы</B> друг к другу! Получили противоречие: уравнения одновременно несводимы и сводимы
                        друг к другу! Раз пришли к противоречию, значит наше исходное предположение о существовании двух
                        несводимых друг к другу линейных уравнений с одинаковыми корнями неверно. Следовательно,{' '}
                        <B>не существует</B> двух несводимых друг к другу линейных уравнений с одинаковыми корнями.
                    </P>
                    <P>
                        Все линейные уравнения с одинаковыми корнями отличаются друг от друга только общим множителем!
                    </P>
                    <P>{QED}</P>
                </ProblemSection>
                <ProblemSection title="Прямой способ">
                    <P>
                        Будем доказывать от противного. Предположим, что <B>существуют</B> два несводимых друг к другу
                        линейных уравнения с одинаковым корнем:
                    </P>
                    <BlockMath>{math`A_1x + B_1 = 0 >>{big} A_2x + B_2 = 0`}</BlockMath>
                    <P>
                        Так как эти два уравнения несводимы друг к другу, то коэффициенты <M>A_2</M> и <M>B_2</M> нельзя
                        получить из <M>A_1</M> и <M>B_1</M> умножением на одно и то же число, иначе этот общий множитель
                        можно было бы просто вынести за скобки. Множители обязаны быть разными, например <M>n</M> для
                        получения <M>A_2</M> и <M>m</M> для получения <M>B_2</M>:
                    </P>
                    <BlockMath>{math`A_1x + B_1 = 0 >>{big} \underbrace{nA_1}_{A_2}x + \underbrace{mB_1}_{B_2} = 0`}</BlockMath>
                    <P>
                        При помощи <Dep to={sameActionRule}>правила одинакового действия</Dep> находим решения обоих
                        уравнений:
                    </P>
                    <BlockMath>{math`x = -\frac{B_1}{A_1} >>{big} x = -\frac{mB_1}{nA_1}`}</BlockMath>
                    <P>
                        Из нашего предположения нам известно, что корень обоих уравнений один и тот же, то есть эти
                        отрицательные дроби являются одним и тем же числом:
                    </P>
                    <BlockMath>{math`-\frac{B_1}{A_1} = -\frac{mB_1}{nA_1}`}</BlockMath>
                    <P>
                        Умножим обе части на <M>-1</M>:
                    </P>
                    <BlockMath>{math`\frac{B_1}{A_1} = \frac{mB_1}{nA_1}`}</BlockMath>
                    <P>
                        Умножим обе части на <M>A_1</M>, чтобы в обеих частях провести сокращение:
                    </P>
                    <BlockMath>{math`\cancel{A_1}\cdot\frac{B_1}{\cancel{A_1}} = \frac{mB_1}{n\cancel{A_1}} \cdot \cancel{A_1}`}</BlockMath>
                    <BlockMath>{math`B_1 = \frac{m}{n}B_1`}</BlockMath>
                    <P>
                        Это равенство обязано быть истинным. Раз оно истинное, то <M>n = m</M>, чтобы эти числа
                        взаимосократились и получилось просто <M>B_1 = B_1</M>.
                    </P>
                    <P>
                        Стоп! Но <M>n</M> и <M>m</M> обязаны быть <B>разными</B> числами, ведь согласно нашему
                        предположению наши линейные уравнения несводимы друг к другу!
                    </P>
                    <P>
                        Получили противоречие: нам нужно, чтобы одновременно выполнялись взаимопротивоположные вещи,
                        чтобы и <M>n = m</M>, и <M>n \neq m</M>! Раз пришли к противоречию, значит наше исходное
                        предположение о существовании двух несводимых друг к другу линейных уравнений с одинаковыми
                        корнями неверно. Следовательно, <B>не существует</B> двух несводимых друг к другу линейных
                        уравнений с одинаковыми корнями.
                    </P>
                    <P>
                        Все линейные уравнения с одинаковыми корнями отличаются друг от друга только общим множителем!
                    </P>
                    <P>{QED}</P>
                </ProblemSection>
            </ProblemSolution>
            <ProblemNote>
                <P>Из этой задачи следует красивый и интересный математический факт.</P>
                <P>
                    Любая пара корней <M>x_1</M> и <M>x_2</M> образует <B>целый класс</B> линейных уравнений, все из
                    которых отличаются друг от друга только домножением обеих сторон на одно и то же число. Если вам
                    известно какое-то одно уравнение из этого класса, вы можете получить любое другое уравнение из этого
                    класса, умножив его на любое число. И все эти уравнения будут иметь одинаковые корни.
                </P>
                <P>
                    Более того, <B>не существует</B> линейных уравнений с теми же корнями, но не входящими в этот класс.
                    В этом классе находятся вообще все возможные линейные уравнения с заданными корнями!
                </P>
                <P>
                    Получается, все множество всех линейных уравнений поделено на классы, "мешки". У каждого такого
                    класса, "мешка" с уравнениями, есть своя "бирка", на которой написан корень, которые имеют все
                    уравнения из этого мешка. Все уравнения в мешке отличается только умножением обеих частей на одно и
                    то же число!
                </P>
                <Image src={rootClasses} width="600px" invert="dark">
                    <Caption>
                        Все линейные уравнения распиханы по "мешкам" с одинаковыми корнями
                        <CaptionSecondary>Уравнения в одном мешке отличаются только общим множителем</CaptionSecondary>
                    </Caption>
                </Image>
                <P>
                    Эта ситуация похожа на то, что любая дробь, например{' '}
                    <M>
                        \frac{1}
                        {2}
                    </M>
                    , образует <B>целый класс дробей, обозначающих одно и то же</B>, которые отличаются друг от друга
                    только домножением числителя и знаменателя на одно и то же число:
                </P>
                <BlockMath>{math`\frac{1}{2} = \frac{2}{4} = \frac{3}{6} = \cdots`}</BlockMath>
            </ProblemNote>
        </Problem>

        <H1>Логика решения уравнений</H1>

        <P>
            До этого момента мы довольно вольно решали уравнения. Мы находили решения и как-бы неявно подразумевали, что
            других решений нет. Так же вольно мы обходились с уравнениями без решений и с бесконечным количеством
            решений.
        </P>
        <P>
            Решать так абсолютно нормально и интуитивно понятно. Но если вам действительно хочется копнуть чуть глубже и
            логически строго и четко обосновать решение уравнений, то решите следующие задачи. Или хотя бы прочитайте их
            решения.
        </P>

        <Problem title="Нет решений" level="hard" pretty>
            <ProblemDescription>
                <P>
                    Когда мы в результате преобразований приходим к ложному равенству вообще без переменной, мы говорим,
                    что "уравнение не имеет решений". Но если мы пришли к ложному равенству, на каком основании мы
                    считаем, что исходное уравнение не имеет решений? Ведь его истинность не ясна, а для ложных равенств
                    правило одинакового действия <Dep to={uniques.sameActionRuleFalse}>не работает</Dep>!
                </P>
                <P>
                    Например, уравнение <M>x+3 = x-2</M> в результате вычитания <M>x</M> из обеих частей уравнения
                    свелось к ложному равенству <M>3 = -2</M>. Логически объясните, почему из тезиса "получили ложное
                    равенство <M>3 = -2</M>" следует, что "уравнение <M>x+3 = x-2</M> не имеет решений".
                </P>
            </ProblemDescription>
            <ProblemHint>Логика строится на доказательстве от противного.</ProblemHint>
            <ProblemSolution>
                <P>
                    В разделе "Решение уравнений" в статье мы говорили, что изначально{' '}
                    <B>делаем предположение, что уравнение имеет решения, а значит является истинным равенством</B>. И
                    только после этого предположения мы имеем право преобразовывать уравнение при помощи{' '}
                    <Dep to={sameActionRule}>правила</Dep> одинакового действия. Оно гарантирует, что мы обязательно
                    получим <B>истинное</B> равенство после каждого шага преобразований.
                </P>
                <P>Если в результате преобразований мы пришли к ложному равенству, то это может значить две вещи:</P>
                <List type="ol">
                    <Li>Мы совершили ошибку в цепочке преобразований.</Li>
                    <Li>
                        Наше исходное предположение о том, что уравнение имеет решение, было неверным, и на самом деле
                        никаких решений оно не имеет.
                    </Li>
                </List>
                <P>
                    Так как в цепочке преобразований мы не совершали ошибок, то мы можем с уверенностью утверждать, что
                    уравнение не имеет решений. Красивый пример применения "доказательства от противного".
                </P>
                <P>{QED}</P>
            </ProblemSolution>
        </Problem>

        <Problem title="Конечное число решений" level="hard">
            <ProblemDescription>
                <P>
                    По определению "решить уравнение -- найти его корни и доказать, что других нет". Когда мы, например,
                    вычитанием <M>5</M> из обеих частей уравнения <M>x + 5 = 10</M> приходим к равенству по типу{' '}
                    <M>x=5</M>, то мы говорим, что решили уравнение и нашли его единственное решение <M>5</M>. Считается
                    ли, что мы этими преобразованиями <B>доказали</B>, что у уравнения только одно решение? А что если
                    есть какие-то другие корни?
                </P>
                <P>
                    Является ли решение уравнения путём преобразований по правилу одинакового действия доказательством
                    того, что у уравнения нет других корней?
                </P>
            </ProblemDescription>
            <ProblemHint>Докажите от противного.</ProblemHint>
            <ProblemSolution>
                <P>
                    Докажем от противного. <B>Предположим</B>, у некоторого уравнения есть какой-то <B>отличающийся</B>{' '}
                    от всех уже найденных корень <M>x'</M>, который мы не учли и не получили путём применения{' '}
                    <Dep to={sameActionRule}>правила</Dep> одинакового действия. Заменяем <M>x</M> в уравнении на наш{' '}
                    <M>x'</M>. Так как <M>x'</M> -- это корень уравнения, то при его подстановке у нас получится
                    истинное равенство. А раз оно истинное, мы можем повторить всю ту же цепочку преобразований, которую
                    мы проводили при решении уравнения. И мы вновь придём к тому, что <M>x'</M> станет равен одному уже
                    и найденных корней (для примера из условия это <M>x' = 5</M>).
                </P>
                <P>
                    Пришли к противоречию, ведь <M>x'</M> обязан быть другим корнем, который мы ещё не нашли. А он
                    оказался уже найденным. Значит, наше исходное предположение о том, что у уравнения есть какие-то
                    другие ненайденные корни, неверно.
                </P>
                <P>
                    Получается, что при решении уравнения при помощи <Dep to={sameActionRule}>правила</Dep> одинакового
                    действия мы одновременно и находим корни уравнения, и доказываем, что других корней нет.
                </P>
                <P>{QED}</P>
            </ProblemSolution>
        </Problem>

        <Problem title="Бесконечно много решений" level="hard">
            <ProblemDescription>
                <P>
                    Когда мы в результате преобразований приходим к истинному равенству вообще без переменной, можно ли
                    сказать, что у него "бесконечно много решений"? Что "любое число будет его корнем"?
                </P>
                <P>
                    Например, уравнение <M>x+3 = x+3</M> в результате вычитания <M>x</M> из обеих частей уравнения
                    свелось к истинному равенству <M>3 = 3</M>. Можно ли сказать, что из тезиса "получили истинное
                    равенство <M>3 = 3</M>" следует, что "уравнение <M>x+3 = x+3</M> имеет бесконечно много решений"?
                </P>
            </ProblemDescription>
            <ProblemHint>
                Полагаться на правило одинакового действия нельзя, потому что всегда можно просто умножить обе части на{' '}
                <M>0</M> и получить истинное равенство.
            </ProblemHint>
            <ProblemSolution>
                <P>
                    Нет, так сказать нельзя. Когда мы показывали, что правило одинакового действия{' '}
                    <Dep to={uniques.sameActionRuleFalse}>не работает</Dep> для ложных равенств, в качестве примера мы
                    привели умножение обеих частей на <M>0</M>. По такой же логике мы можем любое уравнение сразу же
                    свести к истинному равенству, умножив обе части на <M>0</M>.
                </P>
                <P>
                    Например, возьмём уравнение <M>x = 5</M>. Если мы умножим обе части на <M>0</M>, то получим истинное
                    равенство <M>0 = 0</M>. Но это не значит, что у уравнения <M>x = 5</M> бесконечно много решений. На
                    самом деле у него только одно решение -- число <M>5</M>.
                </P>
                <P>
                    Поэтому, когда мы получаем истинное равенство без переменной, это не значит, что у уравнения
                    бесконечно много решений. В каждом отдельном случае нужно отдельно доказывать, что уравнение имеет
                    бесконечно много решений.
                </P>
                <P>
                    Например, в уравнении <M>x + 3 = x + 3</M> мы можем подставить абсолютно любое число вместо <M>x</M>
                    . В левой и правой частях мы к этому числу просто прибавляем <M>3</M>. Согласно{' '}
                    <Dep to={sameActionRule}>правилу</Dep> одинакового действия после прибавления <M>3</M> получаем
                    новое истинное равенство. А это по определению значит, что <M>x</M> -- решение уравнения.
                </P>
                <P>{QED}</P>
            </ProblemSolution>
        </Problem>
    </>
));
