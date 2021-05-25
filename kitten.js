let { libcheat } = await import('https://hydroflame.github.io/incremental_cheats/main.js');
libcheat.addTask(()=>$(".btnContent:contains('Gather catnip')").click());
libcheat.addTask(()=>$(".btnContent:contains('Catnip Field')").click(), true, 'auto catnip field');
libcheat.addTask(()=>$(".btnContent:contains('Refine catnip')").click(), true, 'auto refine catnip');