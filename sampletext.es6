import React from 'react';

const roundTo = (number, decimalPlaces) => Math.round(number * Math.pow(10, decimalPlaces)) / (Math.pow(10, decimalPlaces));
const round3 = (number) => roundTo(number, 3);
const round1 = (number) => roundTo(number, 1);

const modularScale = (step) => Math.pow(1.125, step);

const stepFromClass = (className) => {
  if (!className) { return 0; }
  const theClass = className.split(/\s+/).filter(cls => /^step-/.test(cls))[0];

  if (!theClass) { return 0; }

  const [leftOfDash, rightOfDash] = theClass.split('-');
  return +(rightOfDash || 0);
}

const addModularScaleTitles = (elm) => {
  return React.cloneElement(elm, {
    children: elm.props.children.map((child) => {
      const step = stepFromClass(child.props.className || '') || 0;
      const emSize = modularScale(step);
      return React.cloneElement(child, {
        title: `${ round3(emSize) }em (${ round1(emSize * 20) }px)`
      })
    }),
  });
}

export default class SampleText extends React.Component {
  render() {
    return addModularScaleTitles(
<section>
<div className="step-3 flight">Very samplish flight</div>

<div className="step-7 heading">step 7 Fingerstache nesciunt lomo nostrud
hoodie</div>

<div className="step-6 heading">step 6 Kitsch retro lewhi föiwehf öweihf oweih
föwehjkwefkjwekfwe</div>

<div className="step-5 heading">step 5 Typewriter delectus cred</div>

<div className="step-4 heading">step 4 Fingerstache nesciunt lomo nostrud
hoodie</div>

<div className="step-3 heading">step 3 Kitsch retro lewhi föiwehf öweihf oweih
föwehjkwefkjwekfwe</div>

<div className="step-2 heading">step 2 Typewriter delectus cred</div>

<div className="step-1 heading">step 1 Truffaut disrupt sartorial deserunt</div>

<div className="step-0 heading">step 0 abc def ghi jkl mno pqrs tuv wxyz ABC DEF GHI JKL MNO PQRS TUV WXYZ !"§ $%& /() =?* '{'<>'} #|; ²³~ @`´ ©«» ¤¼× {'{}'} abc def ghi jkl mno pqrs tuv wxyz ABC DEF GHI JKL MNO PQRS TUV WXYZ !"§ $%& /() =?* '{'<>'} #|; ²³~ @`´ ©«» ¤¼× {'{}'} abc def ghi jkl mno pqrs tuv wxyz ABC DEF GHI JKL MNO PQRS TUV WXYZ !"§ $%& /() =?* '{'<>'} #|; ²³~ @`´ ©«» ¤¼× {'{}'}abc def ghi jkl mno pqrs tuv wxyz ABC DEF GHI JKL MNO PQRS TUV WXYZ !"§ $%& /()</div>

<div className="step--1 heading">step -1 Truffaut disrupt sartorial deserunt</div>

<div className="step--2 heading">step -2 Fingerstache nesciunt lomo nostrud
hoodie</div>

<p>Bushwick Schlitz. Est Shoreditch small batch, dolor Schlitz sapiente twee
stumptown ex. Duis Carles pickled, cornhole Thundercats McSweeneys minim PBR
vegan Tumblr irony. Kogi eu Thundercats, sed scenester before they sold out et
aesthetic. Elit cred Vice ethical pickled sartorial. Stumptown roof party
freegan High Life vero, ea sed minim meggings.</p>

<div className="step-3 italic">step-3 Kitsch retro lewhi föiwehf öweihf oweih
föwehjkwefkjwekfwe</div>

<div className="step-2 italic">step-2 Typewriter delectus cred</div>

<div className="step-1 italic">step-1 Truffaut disrupt sartorial deserunt</div>

<div className="step-0 italic">step-0 Fingerstache nesciunt lomo nostrud
hoodie</div>

<div className="step-3">step-3 Kitsch retro lewhi föiwehf öweihf oweih
föwehjkwefkjwekfwe</div>

<div className="step-2">step-2 Typewriter delectus cred</div>

<div className="step-1">step-1 Truffaut disrupt sartorial deserunt</div>

<div className="step-0">step-0 Fingerstache nesciunt lomo nostrud hoodie</div>

<h2>Typewriter delectus cred</h2>

<p className="step-0 italic">Laboris selfies occaecat umami, forage Tumblr
American Apparel. Retro Terry Richardson culpa id swag polaroid Intelligentsia
American Apparel eu, esse non post-ironic fugiat master cleanse. Direct trade
gluten-free blog, fanny pack cray labore skateboard before they sold out
adipisicing non magna id Helvetica freegan. Disrupt aliqua Brooklyn church-key
lo-fi dreamcatcher.</p>

<p>Cosby sweater plaid shabby chic kitsch pour-over ex. Try-hard fanny pack
mumblecore cornhole cray scenester. Assumenda narwhal occupy, Blue Bottle nihil
culpa fingerstache. Meggings kogi vinyl meh, food truck banh mi Etsy magna 90s
duis typewriter banjo organic leggings Vice.</p>

<ul>

<li>Roof party put a bird on it incididunt sed umami craft beer cred.</li>

<li>Carles literally normcore, Williamsburg Echo Park fingerstache photo booth
twee keffiyeh chambray whatever.</li>

<li>Scenester High Life Banksy, proident master cleanse tousled squid sriracha
ad chillwave post-ironic retro.</li>

</ul>

<p>Laboris selfies occaecat umami, forage Tumblr American Apparel. Retro Terry
Richardson culpa id swag polaroid Intelligentsia American Apparel eu, esse non
post-ironic fugiat master cleanse. Direct trade gluten-free blog, fanny pack
cray labore skateboard before they sold out adipisicing non magna id Helvetica
freegan. Disrupt aliqua Brooklyn church-key lo-fi dreamcatcher.</p>

<p>After the September 11th terrorist attacks in 2001 America poured money into
developing software for counter-terrorism. When fed with information, such as
people’s e-mails, schooling, web surfing, phone calls, banking transactions and
purchases, the programs try to work out who might be a terrorist. A person could
pop up on an intelligence agency’s computer screen if, say, he downloads
podcasts of a radical Sunni cleric, visits the city where that cleric preaches,
and then takes calls from a town held by Islamic State. Now America is making a
big effort to adapt this software to sniff out nuclear shenanigans too, says
William Tobey, a former head of counter-proliferation strategy on the White
House’s National Security Council.</p>

<p>Software used for this type of analysis include i2 Analyst’s Notebook from
IBM, Palantir from a Californian firm of the same name, and ORA, which was
developed with Pentagon funds at Carnegie Mellon University in Pennsylvania.
ORA has crunched data on more than 30,000 nuclear experts’ work and
institutional affiliations, research collaborations and academic publications,
says Kathleen Carley, who leads the ORA work at Carnegie Mellon. Changes, such
as a halt in publishing, can tell stories: scientists recruited into a weapons
programme typically cannot publish freely. Greater insights appear when
classified or publicly unavailable information is sifted too. Credit-card
transactions can reveal that, say, a disproportionate number of doctors
specialising in radiation poisoning are moving to the same area.</p>

<p>Who’s who in the zoo

The software uses combinatorial mathematics, the analysis of combinations of
discrete items, to score individuals on criteria including “centrality” (a
person’s importance), “between-ness” (their access to others), and “degree”
(the number of people they interact with). Network members with high
between-ness and low degree tend to be central figures: they have access to
lots of people, but like many senior figures may not interact with that many.
Their removal messes things up for everybody. Five or more Iranian nuclear
scientists assassinated in recent years—by Israel’s Mossad, some suspect—were
no doubt chosen with help from such software, says Thomas Reed, a former
secretary of the United States Air Force and co-author of “The Nuclear Express”,
a history of proliferation.</p>

<p>Importantly, the software can also evaluate objects that might play a role in
a nuclear programme. This is easier than it sounds, says a former analyst (who
asked not to be named) at the Pentagon’s Central Command in Tampa, Florida.
Ingredients for homemade conventional bombs and even biological weapons are
available from many sources, but building nukes requires rare kit. The software
can reveal a manageable number of “chokepoints” to monitor closely, he says.
These include links, for instance, between the few firms that produce special
ceramic composites for centrifuges and the handful of companies that process
the material.</p>

<p>A number of countries, including Japan and Russia, use network analysis.
Japan’s intelligence apparatus does so with help from the Ministry of Economy,
Trade and Industry, which assists in deciding which “dual use” items that might
have both peaceful and military purposes should not be exported. Such work is
tricky, says a member of the advisory board (who also asked not to be named) to
the security council of the Russian Federation, a body chaired by Vladimir
Putin. Individual items might seem innocent enough, he says, and things can be
mislabelled.</p>

<p>Data sources are diverse, so the work takes time. Intelligence often
coalesces after a ship has left port, so foreign authorities are sometimes
asked to board and search, says Rose Gottemoeller, undersecretary for arms
control at America’s State Department. The speed of analysis is increasing,
however. Software that converts phone conversations into computer-readable
text has been “extremely helpful”, says John Carlson, a former head of the
Australian foreign ministry’s Safeguards and Non-Proliferation Office.</p>

<p>The known unknowns

Network analysis has limitations. Adapting terrorist-identifying software to
pick out people in a covert nuclear programme is hard. Proliferators are
outnumbered by terrorists, so there is less nuke-specific data to calibrate
the software. Beyond this, computers struggle to calculate the astronomical
number of potential links in a network. The problem is made worse as analysts
realise that new types of data, such as details of metal or chemical imports,
prove useful.</p>

<p>North Korea helped to keep its centrifuge facility secret by using mostly
black-market or domestically manufactured components

Would-be nuclear states can also reduce their networks. North Korea helped to
keep its centrifuge facility secret by using mostly black-market or domestically
manufactured components. Iran is also indigenising its nuclear programme,
which undermines what network analysis can reveal, says Alexander Montgomery,
a political scientist at Reed College in Portland, Oregon. Iran mines uranium
domestically and has produced centrifuge rotors with carbon fibre, instead of
importing special maraging steel which is usually required.</p>

<p>A big computer system to make sense of all this would help, says Miriam John,
vice-chairman of the Pentagon’s Threat Reduction Advisory Committee. Which is
why the Pentagon is building one, called Constellation. Dr John describes it
as a “fusion engine” that merges all sorts of data. For instance, computers
can comb through years of satellite photos and infra-red readings of buildings
to detect changes that might reveal nuclear facilities. Constellation aims to
increase the value of such nuggets of information by joining them with myriad
other findings. For example, the whereabouts of nuclear engineers who have
stopped teaching before retirement age become more interesting if those people
now happen to live within commuting distance of a suspect building.</p>

</section>
    );
  }
}
