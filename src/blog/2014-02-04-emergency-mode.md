import Image from 'components/Image'
import Align from 'components/designSystem/Align'

export const frontmatter = {
layout: "post",
title: "Emergency Mode",
date: "2014-02-04"
}

# Emergency Mode

“What would happen if I were struck down by a car right now?”

That’s a question I ask myself on a far-too-often basis. Considering the rate of
occurrence, you’d think I’d have optimized for the scenario with a card or
something on my person at all times, detailing points of contact, etc. But in an
emergency situation, such as a car accident, good samaritans can only do so
much. It’d be a big ask to consider such a wealth of information may possibly be
on the victim’s person.

We have devices with us all the time which can help in situations like this. The
technology is there, just waiting for the right minds to apply themselves. Think
about the kind of information these devices contain; most commonly contacted
phone numbers, current (and previous) locations, personal information. Exactly
the sort of thing required in an emergency. So let’s explore the potential,
shall we?

---

<Align.Left>
<Image src="2014/02/emergency-mode-home.png" />
</Align.Left>

The way I imagine it, this emergency functionality would certainly justify
native implementation in a smartphone OS. Let’s say, for the sake of example,
that someone with an emergency mode-enabled smartphone is involved in a car
accident. The first person on the scene is alerted to the presence of the
victim’s phone by an alert playing from it. Emergency mode—and the alert
tone—are activated at the time of the accident thanks to the phone’s
accelerometer sensing an exceptional and sudden change in motion (most likely a
collision).

When the person on scene picks up the phone, they are presented with a screen
letting them know that the phone is in emergency mode, and prompts action.

Tapping the prompt reveals a series of actions and information about the
device’s owner, contextual information (what’s the number for the local
emergency services? It’s not 911 in Paris, for instance), emergency contacts,
allergies and other medical information. These details may also be sent directly
to the emergency services on demand or on placing a call, if the technology were
developed to support something like that.

<Align.Right>
<Image src="2014/02/emergency-mode-detail.png" />
</Align.Right>

The device could also send extra information automatically to the emergency
services; rough details of the events leading up to the accident, such as
locations, traveling speed, etc. This information, as well as current location,
may also be submitted automatically by the device as a distress signal in case
no one is able or around to find the device and supply the information
automatically.

We’re all carrying devices capable of providing a full black box record of
events leading up to an event, as well as personal details to help ensure the
right people are informed and important details are known.

This information could also be exposed in other scenarios. What if the phone is
lost or stolen? Proper authorities could be given the power to expose owner
information on demand. An emergency mode such as this could effectively replace
or be an extension of the current “emergency call” functionality currently found
in many locked-screen devices.

---

Obviously, there are a huge number of privacy concerns around implementing a
system like this; it would be very easy to find out quite a lot of information
about someone by tricking a device into emergency mode. I’m also certain that
many minds smarter than myself have already approached this idea. That said, I
for one would love this sort of thing in my phone. It’s time we stop freaking
out about device surveillance and begin working together to put it to our
advantage – starting with the life-and-death scenarios that are already in need
of design thinking.
