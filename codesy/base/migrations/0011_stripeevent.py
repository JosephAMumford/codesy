# -*- coding: utf-8 -*-
# Generated by Django 1.9.4 on 2016-07-20 17:17
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0010_stripeaccount_stripe_id'),
    ]

    operations = [
        migrations.CreateModel(
            name='StripeEvent',
            fields=[
                ('event_id', models.CharField(blank=True, max_length=100, primary_key=True, serialize=False)),
                ('type', models.CharField(blank=True, max_length=100)),
                ('data', models.TextField()),
            ],
        ),
    ]
