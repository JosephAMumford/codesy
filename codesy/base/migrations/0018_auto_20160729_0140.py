# -*- coding: utf-8 -*-
# Generated by Django 1.9.4 on 2016-07-29 01:40
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0017_auto_20160726_1827'),
    ]

    operations = [
        migrations.RenameField(
            model_name='stripeaccount',
            old_name='verification_fields',
            new_name='verification',
        ),
    ]
