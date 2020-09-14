# -*- coding: utf-8 -*-
from django.shortcuts import render

# Create your views here.

# -*- coding: utf-8 -*-
from django.shortcuts import render, redirect
from django.template.response import TemplateResponse, HttpResponse

def JstDef2(request):
    return TemplateResponse(request, 'less2/html2.html')

def JsDefDz2(request):
    return TemplateResponse(request, 'less2/htmldz2.html')
