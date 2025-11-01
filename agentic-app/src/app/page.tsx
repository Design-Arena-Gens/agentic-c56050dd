export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 antialiased dark:bg-zinc-950 dark:text-zinc-100">
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-6 pb-24 pt-16 sm:px-12 lg:px-20">
        <section className="rounded-3xl border border-zinc-200 bg-white p-10 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <span className="inline-flex items-center rounded-full bg-emerald-100 px-4 py-1 text-sm font-semibold text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300">
            Правовые сроки
          </span>
          <h1 className="mt-6 text-3xl font-semibold leading-tight sm:text-4xl">
            Чем отличается срок принятия наследства от срока получения
            имущественного налогового вычета
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
            Принятие наследства и получение имущественного налогового вычета
            регулируются разными отраслями права. Наследственное право устанавливает
            строго ограниченный период, а налоговое право позволяет переносить вычет
            на будущие периоды, хотя и с ограничениями по возврату за прошлые годы.
            Ниже — ключевые различия, о которых следует знать.
          </p>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="text-2xl font-semibold">Принятие наследства</h2>
            <ul className="mt-6 space-y-4 text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
              <li>
                <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                  Стандартный срок
                </span>{" "}
                — 6 месяцев с даты открытия наследства (ст. 1154 ГК РФ).
              </li>
              <li>
                После окончания 6 месяцев восстановление возможно только через суд
                при наличии уважительных причин.
              </li>
              <li>
                Событие одномоментное: наследник обязан успеть подать заявление
                нотариусу или фактически принять наследство в этот период.
              </li>
              <li>
                Пропуск срока часто ведет к утрате права на имущество и спорам с
                другими наследниками.
              </li>
            </ul>
          </article>

          <article className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="text-2xl font-semibold">
              Имущественный налоговый вычет
            </h2>
            <ul className="mt-6 space-y-4 text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
              <li>
                <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                  Право на вычет
                </span>{" "}
                не ограничено по времени: можно заявить спустя годы после покупки.
              </li>
              <li>
                Налоговая ограничивает возврат НДФЛ только тремя предыдущими
                календарными годами (ст. 78 НК РФ).
              </li>
              <li>
                Процедура повторяется ежегодно, пока вы не выберете лимит вычета или
                не исчерпаете уплаченный НДФЛ.
              </li>
              <li>
                Можно выбрать: подавать 3-НДФЛ или получать вычет напрямую через
                работодателя после подтверждения права.
              </li>
            </ul>
          </article>
        </section>

        <section className="rounded-3xl border border-dashed border-zinc-300 bg-white p-8 shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
          <h2 className="text-2xl font-semibold">
            Ключевые различия сроков
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 text-sm dark:border-zinc-800 dark:bg-zinc-950">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                Жесткость
              </h3>
              <p className="mt-3 text-zinc-700 dark:text-zinc-300">
                Наследство требует соблюдения шестимесячного срока, иначе — суд.
                Налоговый вычет можно перенести без потери права.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 text-sm dark:border-zinc-800 dark:bg-zinc-950">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                Последствия пропуска
              </h3>
              <p className="mt-3 text-zinc-700 dark:text-zinc-300">
                Пропущенный срок наследства приводит к потере имущества. С вычетом
                теряется лишь возможность вернуть НДФЛ за ранние годы.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 text-sm dark:border-zinc-800 dark:bg-zinc-950">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                Восстановление
              </h3>
              <p className="mt-3 text-zinc-700 dark:text-zinc-300">
                Наследство — только через суд или согласие других наследников.
                Налоговый вычет — можно просто подать декларацию позднее.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <h2 className="text-2xl font-semibold">Что учесть на практике</h2>
          <ul className="mt-6 space-y-4 text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
            <li>
              Сразу после открытия наследства фиксируйте факт принятия: подайте
              заявление нотариусу или соберите доказательства фактического
              принятия.
            </li>
            <li>
              Для имущественного вычета сохраняйте договор купли-продажи, платежные
              документы и справки 2-НДФЛ — они нужны при подаче декларации.
            </li>
            <li>
              Планируйте: если ожидаете крупный возврат НДФЛ, подавайте декларацию
              сразу по итогам года, чтобы не терять «старые» суммы.
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
